export const name="diamond-fill";
export const id="dl_b3720df69399457292af";
export const url=new URL("../icons/diamond-fill.svg?v=459ca9ca1976cd4ab9f8fe302a1b0f63b06c63e10091c6d6c7bcb8993b3c85dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
