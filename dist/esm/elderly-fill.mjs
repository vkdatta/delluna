export const name="elderly-fill";
export const id="dl_f95e7d5e8bcc41cfa9f3";
export const url=new URL("../icons/elderly-fill.svg?v=b85dbb3ca8c12a10b7641cf36d37c87c355d372c94a92d16d06a55064af89556",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
