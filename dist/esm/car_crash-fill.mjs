export const name="car_crash-fill";
export const id="dl_180c43682017b4f266da";
export const url=new URL("../icons/car_crash-fill.svg?v=683ebb521d2b30a72a5daadb8acfdb8fffa0b45ed163250c7b8985877f818cc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
