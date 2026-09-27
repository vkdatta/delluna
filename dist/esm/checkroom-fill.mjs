export const name="checkroom-fill";
export const id="dl_4088c1993e33cf83527e";
export const url=new URL("../icons/checkroom-fill.svg?v=11d27c735b9a9b526184d99ac8ff1a009d72f09d4a4a4b52c52ff86b3d33cb00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
