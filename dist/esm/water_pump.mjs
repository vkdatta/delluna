export const name="water_pump";
export const id="dl_a4a40ac6353040b0c318";
export const url=new URL("../icons/water_pump.svg?v=3a9f63fdd2956b1550c1e460ef9c91edee0d301558b51012f25582b7c4d5e66b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
