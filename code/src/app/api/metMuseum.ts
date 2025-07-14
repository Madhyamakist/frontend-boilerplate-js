export const fetchDepartments = async () => {
  const res = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments");
  if (!res.ok) throw new Error(`Failed to fetch departments: ${res.status}`);
  return (await res.json()).departments;
};

export const fetchListItemIDs = async (departmentId: number) => {
  const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentId}`);
  if (!res.ok) throw new Error(`Failed to fetch list item IDs: ${res.status}`);
  const data = await res.json();
  return data.objectIDs?.slice(0, 10) || [];
};

export const fetchMultipleListItems = async (ids: number[]) => {
  return await Promise.all(
    ids.map(async id => {
      try {
        const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch list item ${id}`);
        return await res.json();
      } catch {
        return null;
      }
    })
  ).then(results => results.filter(Boolean));
};
