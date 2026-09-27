export const name="uppercase";
export const id="dl_e6709b38f36451af6b79";
export const url=new URL("../icons/uppercase.svg?v=79aad0527354feb3f509414e34b30eff024d0b1f1539a0aa19ea2ce4a6b97c5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
