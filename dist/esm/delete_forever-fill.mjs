export const name="delete_forever-fill";
export const id="dl_f2c3e03d2f817ed73842";
export const url=new URL("../icons/delete_forever-fill.svg?v=376d9687b46e80c38453dcfd80b6c49cd4c19d143b759043b4f6943f4650beea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
