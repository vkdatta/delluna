export const name="engineering-fill";
export const id="dl_dbca044e50684ab7bac9";
export const url=new URL("../icons/engineering-fill.svg?v=f35a0728ff35093a57ac1a7d97d6818c58bc610ff7df5f9b209c0290696d5e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
