export const name="balcony-fill";
export const id="dl_14ffe25455624a8e96bb";
export const url=new URL("../icons/balcony-fill.svg?v=73d6387ee8e217558d5c1438ef8111f9fdb74b717b8f59e4aa681d4aae6b9d9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
