'use client';

import { useState } from 'react';
import { ListItem } from '../models/listItems';
import { fetchListItemIDs, fetchMultipleListItems } from '../api/metMuseum';

export default function useDepartmentList() {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(false);

  const handleDepartmentSelect = async (departmentId: number) => {
    setLoading(true);
    setListItems([]);

    try {
      const ids = await fetchListItemIDs(departmentId);
      const details = await fetchMultipleListItems(ids);
      setListItems(details);
    } catch (err) {
      console.error('Error fetching list items:', err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, listItems, handleDepartmentSelect };
}
