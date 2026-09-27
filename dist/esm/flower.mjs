export const name="flower";
export const id="dl_febd66135fdf4aadaffc";
export const url=new URL("../icons/flower.svg?v=cb6c4585bcaae7343e3cd0ffa0b1a89a4f6a23f7d8b8fea6a7ecfec888d76412",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
