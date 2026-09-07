export const name="user-circle-gear";
export const id="dl_690c00e9855c44ebb3fa";
export const url=new URL("../icons/U/user-circle-gear.svg?v=f253592d3d1f60ac6b0c6dee07948995d5808ecc6894aced7c0a7af9552851b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
