export const name="chair_fireplace-fill";
export const id="dl_36d28c110800d4cf4995";
export const url=new URL("../icons/chair_fireplace-fill.svg?v=9d496ef1e582dd50212c0ee01bff1eb8b2ac26b856947d26c07337362c0d952b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
