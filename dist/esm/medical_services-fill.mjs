export const name="medical_services-fill";
export const id="dl_32d131cf6dae7e886675";
export const url=new URL("../icons/medical_services-fill.svg?v=53737bf6ee6b64f115a50c218e07c907d146d74f11f066f0fb4cc4a67a05a1cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
