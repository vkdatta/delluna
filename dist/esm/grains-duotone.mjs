export const name="grains-duotone";
export const id="dl_8549b741c5d9415db211";
export const url=new URL("../icons/grains-duotone.svg?v=8d6e8b74c085c02c6a8f74d25d4de0a56c0096d0b1c69a64b5b8137231a0dec3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
