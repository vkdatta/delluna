export const name="vault-bold";
export const id="dl_0dcba206f943253550fc";
export const url=new URL("../icons/vault-bold.svg?v=ef3d6019ec6b26a29a691a045429e4412ec4d3c2b1c374507ba7c2b55fdd2543",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
