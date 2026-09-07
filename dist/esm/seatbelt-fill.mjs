export const name="seatbelt-fill";
export const id="dl_c567e88e89314e16bb97";
export const url=new URL("../icons/S/seatbelt-fill.svg?v=cda39619171d39958b600462758843df8eada9f71712637ca01194712811984e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
