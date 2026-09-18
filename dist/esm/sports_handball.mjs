export const name="sports_handball";
export const id="dl_fed8dd8bf374431aa127";
export const url=new URL("../icons/S/sports_handball.svg?v=8ea3f2f795094d8e43833ce464ec1f1443c7e7d3e69a5642afb8c0f94e6529cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
