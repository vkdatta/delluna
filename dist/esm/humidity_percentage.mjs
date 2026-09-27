export const name="humidity_percentage";
export const id="dl_dd09e408d74c5aad4b12";
export const url=new URL("../icons/humidity_percentage.svg?v=70d9fa0f273a0dc98a17a8a30f1e3ab996641a9c341ef18b572651a5aa35fb72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
