export const name="paid";
export const id="dl_eaf48caeaba7fcf17604";
export const url=new URL("../icons/paid.svg?v=71fe3039d2d2f6c6bc9c46f87141364cf4ba594f2ba5635172d9d33ce55fe040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
