export const name="pallet-fill";
export const id="dl_17007128403640e29238";
export const url=new URL("../icons/pallet-fill.svg?v=bde451be4149a7967693647c2586a2de97aa8150fde7d92d4395741603f636fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
