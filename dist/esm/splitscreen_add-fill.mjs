export const name="splitscreen_add-fill";
export const id="dl_f4d1eb501201b4cc2e06";
export const url=new URL("../icons/splitscreen_add-fill.svg?v=90e5eda1531cf6841b63569ec9997a4052857c92e9b8f82f9f481fe191e36fb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
