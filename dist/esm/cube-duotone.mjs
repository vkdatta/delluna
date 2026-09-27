export const name="cube-duotone";
export const id="dl_4a28d6e66741431cb33a";
export const url=new URL("../icons/cube-duotone.svg?v=a62093cea352c84261b059b31b5f8aa6c596f48ec6409ec8a3d33cb7ea9c58ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
