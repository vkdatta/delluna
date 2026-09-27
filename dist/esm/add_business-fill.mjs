export const name="add_business-fill";
export const id="dl_a05ffb9323537be39e08";
export const url=new URL("../icons/add_business-fill.svg?v=359ffb8f20fadcb1d0c5845f57a09fc9b79c7424f94937dbcce472a221f8d7d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
