export const name="add_triangle";
export const id="dl_7fe6cce9da54f57a4cda";
export const url=new URL("../icons/add_triangle.svg?v=98b3c7385942c27640a5cd3d63f29fff3da205d865869ce394e04e10cac613ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
