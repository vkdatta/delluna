export const name="commute-fill";
export const id="dl_155877bc680dc92f495a";
export const url=new URL("../icons/commute-fill.svg?v=72296f10650cf1cac39a86a7ca097d2653f579beff252a9f02f5cc7471c0008b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
