export const name="television-simple-fill";
export const id="dl_8438b37c978e48a79b98";
export const url=new URL("../icons/T/television-simple-fill.svg?v=4af25a94e62f009b0b4053cc6271b7a5c97ce0dd9316d32437c6ecc770170c19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
