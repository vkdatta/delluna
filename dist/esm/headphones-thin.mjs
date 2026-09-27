export const name="headphones-thin";
export const id="dl_edd5fab98776408e9414";
export const url=new URL("../icons/headphones-thin.svg?v=2581a2141c4dc7941e6551821aba893dd1dbdd89b544082cceaab2c4e63c5c7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
