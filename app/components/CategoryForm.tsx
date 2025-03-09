'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

interface Category {
  id: number;
  name: string;
}

interface Property {
  id: number;
  name: string;
  options: { id: number; name: string; child: boolean }[];
}



const privateKey = 'Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ';


const CategoryForm: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState<{ value: number; label: string } | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<{ value: number; label: string } | null>(null);
  const [selectedProperties, setSelectedProperties] = useState<Record<string, string>>({});
  const [childProperties, setChildProperties] = useState<Record<number, Property[]>>({});

  useEffect(() => {
    axios.get("https://stagingapi.mazaady.com/api/v1/all-categories/web", {
      headers: 
                {   
                  'private-key': privateKey,
                  'content-language': 'en',
                  "platform": "web",
                  "currency": "AED",
                  "Accept": "application/json",
                    
                }
    }).then((res) => setCategories(res.data.data.categories));
  }, []);

  useEffect(() => {
    if (selectedMainCategory) {
      axios.get(`https://stagingapi.mazaady.com/api/v1/properties/${selectedMainCategory.value}`, {
        headers: {
          'private-key': privateKey,
          'content-language': 'en',
          "platform": "web",
          "currency": "AED",
          "Accept": "application/json",
        }
      }).then((res) => setSubCategories(res.data.data));
    }
  }, [selectedMainCategory]);

  useEffect(() => {
    if (selectedSubCategory) {
      axios.get(`https://stagingapi.mazaady.com/api/v1/option-properties/${selectedSubCategory.value}`, {
        headers: {
          'private-key': privateKey,
          'content-language': 'en',
          "platform": "web",
          "currency": "AED",
          "Accept": "application/json",
        }
      }).then((res) => setProperties(res.data.data));
    }
  }, [selectedSubCategory]);

  const handlePropertyChange = (propertyId: number, value: any, hasChild: boolean) => {
    setSelectedProperties((prev) => ({ ...prev, [propertyId]: value.label }));
    if (hasChild) {
      axios.get(`https://staging.mazaady.com/api/v1/get-options-child/${value.value}`, {
        headers: {
          'private-key': privateKey,
          'content-language': 'en',
          "platform": "web",
          "currency": "AED",
          "Accept": "application/json",
        }
      }).then((res) => setChildProperties((prev) => ({ ...prev, [propertyId]: res.data.data })));
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Select 
        className="mb-4 text-[#000]" 
        options={categories.map((cat) => ({ value: cat.id, label: cat.name }))} 
        onChange={setSelectedMainCategory} 
        placeholder="Select Main Category"

      />
      <Select 
        className="mb-4 text-[#000]" 
        options={subCategories.map((sub) => ({ value: sub.id, label: sub.name }))} 
        onChange={setSelectedSubCategory} 
        placeholder="Select Sub Category"
      />
      {properties.map((prop) => (
        <div key={prop.id} className="mb-4">
          <Select 
            className="mb-2 text-[#000]" 
            options={[...prop.options.map((opt) => ({ value: opt.id, label: opt.name })), { value: "other", label: "Other" }]} 
            onChange={(value) => handlePropertyChange(prop.id, value, prop.options.some((o) => o.child))} 
            placeholder={prop.name}
          />
          {selectedProperties[prop.id] === "Other" && <input className="border p-2 w-full" placeholder="Enter custom value" />}
          {childProperties[prop.id]?.map((child) => (
            <Select 
              key={child.id} 
              className="mt-2 text-[#000]" 
              options={child.options.map((opt) => ({ value: opt.id, label: opt.name }))} 
              onChange={(value) => handlePropertyChange(child.id, value, child.options.some((o) => o.child))} 
              placeholder={child.name}
            />
          ))}
        </div>
      ))}
      {/* <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
        onClick={() => console.log(selectedProperties)}
      >
        Submit
      </button> */}
      <table className="mt-4 w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-[#000]">Property</th>
            <th className="border px-4 py-2 text-[#000]">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(selectedProperties).map(([key, value]) => (
            <tr key={key}>
              <td className="border px-4 text-[#000] py-2">{key}</td>
              <td className="border px-4 text-[#000] py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryForm;
