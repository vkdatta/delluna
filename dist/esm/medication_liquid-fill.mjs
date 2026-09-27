export const name="medication_liquid-fill";
export const id="dl_f4c86cf1c4b55e1f9cfc";
export const url=new URL("../icons/medication_liquid-fill.svg?v=7d70d70175eaa6e29f3045aed7d1839062d94b759a60151a2235f15a6c35cf31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
