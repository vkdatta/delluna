export const name="flame";
export const id="dl_96599f39126a48d4a7ae";
export const url=new URL("../icons/flame.svg?v=99ad4b7ab5bb02120ef216e9e1d6e1bf852ffcdf8b1ea00c909e9f01e3775cd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
