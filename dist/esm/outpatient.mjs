export const name="outpatient";
export const id="dl_cee9878f003e0024262d";
export const url=new URL("../icons/outpatient.svg?v=d3313aa816d69d2c88966cf6ec540c07efcd6f8798289f0ba530e06c61248ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
