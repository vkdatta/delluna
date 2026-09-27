export const name="pergola-fill";
export const id="dl_2e90da213ca69918c792";
export const url=new URL("../icons/pergola-fill.svg?v=3a998818e88ca0b9e8d5f0abda37b9f3c86d582854db6c3050beb28540b38a98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
