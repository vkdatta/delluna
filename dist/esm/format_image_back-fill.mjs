export const name="format_image_back-fill";
export const id="dl_b374c5669e8035e7448f";
export const url=new URL("../icons/format_image_back-fill.svg?v=9c763facf8d8a5ef2e016fc62b0c7d1b9a18671ce13c09388fc4187646429d2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
