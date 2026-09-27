export const name="armchair-bold";
export const id="dl_3892788a1fec40cda3c8";
export const url=new URL("../icons/armchair-bold.svg?v=ee2c7dbeb60a9042ef2026510e7b286b4fffdb588f8a352adbb1efe3df0a6aa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
