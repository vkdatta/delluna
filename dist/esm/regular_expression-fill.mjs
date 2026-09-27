export const name="regular_expression-fill";
export const id="dl_35213aa3d8b642c24417";
export const url=new URL("../icons/regular_expression-fill.svg?v=945fc804d2e18de4397b8d91a7e19cf676a807d41f3ab285e5d6ae8fcb2c7232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
