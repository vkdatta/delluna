export const name="prohibit";
export const id="dl_e463e9a5d9a647bd8add";
export const url=new URL("../icons/prohibit.svg?v=fe38e6891b75be10d889d229c9485c450b1a6f52f0aa3d6b4e6010dd798e1826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
