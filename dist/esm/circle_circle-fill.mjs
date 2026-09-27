export const name="circle_circle-fill";
export const id="dl_79781ee72be13f39568d";
export const url=new URL("../icons/circle_circle-fill.svg?v=ddc00be8539c3a4ed55120914d0eae69e5e8c5c1ac795823a104a2ebb79c5bcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
