export const name="coffee-bean-thin";
export const id="dl_a7083d973a2542e8b2c3";
export const url=new URL("../icons/coffee-bean-thin.svg?v=74c786a3ddd9ee72af4504d4a72aa400132be4585065504e202b9dafc3e7b772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
