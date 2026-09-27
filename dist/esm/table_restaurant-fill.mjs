export const name="table_restaurant-fill";
export const id="dl_b35692b890913d4c2628";
export const url=new URL("../icons/table_restaurant-fill.svg?v=f710d0ce62ebf28b4d378fc144c74a598e8bc94b5b2cda087a470baebc5ec8de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
