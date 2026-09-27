export const name="car_defrost_low_left-fill";
export const id="dl_91a418e3497191c8b4df";
export const url=new URL("../icons/car_defrost_low_left-fill.svg?v=a47eb2b5d60d68c5b486a14ac1899a4c6c55bc6da28292c9ee2c1e3c6c4f5c5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
