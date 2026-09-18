export const name="seat_heat_right-fill";
export const id="dl_d5ad2dcb9007460c8c16";
export const url=new URL("../icons/seat_heat_right-fill.svg?v=a40b47aabde1de172d072406837fdb460e13c363f4d4bb3d806fe5db0d697b54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
