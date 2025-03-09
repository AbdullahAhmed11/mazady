'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import Select, { SingleValue } from "react-select";

// Interfaces for Type Safety
interface Category {
  id: number;
  name: string;
}

interface Property {
  id: number;
  name: string;
  options: { id: number | string; name: string; child: boolean }[];
}

interface Option {
  value: number | string;
  label: string;
}

// Constants
const API_BASE_URL = "https://stagingapi.mazaady.com/api/v1";
const PRIVATE_KEY = 'Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ';
const HEADERS = {
  'private-key': PRIVATE_KEY,
  'content-language': 'en',
  platform: 'web',
  currency: 'AED',
  Accept: 'application/json',
};

const CategoryForm: React.FC = () => {
  // State Management
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState<SingleValue<Option>>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SingleValue<Option>>(null);
  const [selectedProperties, setSelectedProperties] = useState<Record<string, string>>({});
  const [childProperties, setChildProperties] = useState<Record<number, Property[]>>({});

  // Fetch Data Function
  const fetchData = async (url: string, setData: (data: any) => void) => {
    try {
      const response = await axios.get(url, { headers: HEADERS });
      setData(response.data.data);
    } catch (error) {
      console.error(`Failed to fetch data from ${url}:`, error);
    }
  };

  // Fetch Main Categories on Component Mount
  useEffect(() => {
    fetchData(`${API_BASE_URL}/all-categories/web`, (data) => setCategories(data.categories));
  }, []);

  // Fetch Subcategories when Main Category is Selected
  useEffect(() => {
    if (selectedMainCategory) {
      fetchData(`${API_BASE_URL}/properties/${selectedMainCategory.value}`, setSubCategories);
    }
  }, [selectedMainCategory]);

  // Fetch Properties when Subcategory is Selected
  useEffect(() => {
    if (selectedSubCategory) {
      fetchData(`${API_BASE_URL}/option-properties/${selectedSubCategory.value}`, setProperties);
    }
  }, [selectedSubCategory]);

  // Handle Property Selection
  const handlePropertyChange = async (propertyId: number, value: SingleValue<Option>, hasChild: boolean) => {
    if (!value) return;

    setSelectedProperties((prev) => ({ ...prev, [propertyId]: value.label }));

    if (hasChild) {
      try {
        const response = await axios.get(`https://staging.mazaady.com/api/v1/get-options-child/${value.value}`, {
          headers: HEADERS,
        });
        setChildProperties((prev) => ({ ...prev, [propertyId]: response.data.data }));
      } catch (error) {
        console.error("Failed to fetch child properties:", error);
      }
    }
  };

  // Render Dropdown Options
  const renderDropdownOptions = (options: { id: number | string; name: string }[], includeOther: boolean = false) => {
    const dropdownOptions = options.map((opt) => ({ value: opt.id, label: opt.name }));
    if (includeOther) dropdownOptions.push({ value: "other", label: "Other" });
    return dropdownOptions;
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {/* Main Category Dropdown */}
      <Select
        className="mb-4 text-[#000]"
        options={renderDropdownOptions(categories)}
        onChange={setSelectedMainCategory}
        placeholder="Select Main Category"
      />

      {/* Subcategory Dropdown */}
      <Select
        className="mb-4 text-[#000]"
        options={renderDropdownOptions(subCategories)}
        onChange={setSelectedSubCategory}
        placeholder="Select Sub Category"
      />

      {/* Properties Dropdowns */}
      {properties.map((prop) => (
        <div key={prop.id} className="mb-4">
          <Select
            className="mb-2 text-[#000]"
            options={renderDropdownOptions(prop.options, true)}
            onChange={(value) => handlePropertyChange(prop.id, value, prop.options.some((o) => o.child))}
            placeholder={prop.name}
          />
          {selectedProperties[prop.id] === "Other" && (
            <input className="border p-2 w-full" placeholder="Enter custom value" />
          )}
          {childProperties[prop.id]?.map((child) => (
            <Select
              key={child.id}
              className="mt-2 text-[#000]"
              options={renderDropdownOptions(child.options)}
              onChange={(value) => handlePropertyChange(child.id, value, child.options.some((o) => o.child))}
              placeholder={child.name}
            />
          ))}
        </div>
      ))}

      {/* Selected Properties Table */}
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