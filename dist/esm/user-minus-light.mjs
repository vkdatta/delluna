export const name="user-minus-light";
export const id="dl_ca0cafe58e0982f78105";
export const url=new URL("../icons/user-minus-light.svg?v=891495a59895e752064e044884153f0b1c6493f44b915101ec6c5d2e2d6b744c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
