export const name="lucid_3-spline";
export const id="dl_8b0bdc8c7451471d91d1";
export const url=new URL("../icons/lucid_3-spline.svg?v=da73cca1c0cb670a1c43a5186c281b546d3553ac91728b176eeb58b0688dbad7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
