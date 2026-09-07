export const name="dots-six-light";
export const id="dl_b0126d38f0b649998371";
export const url=new URL("../icons/dots-six-light.svg?v=6669c23f2b7d3439f4edaeab07fab3ce4412ac5e8261c61c8240a00372d9279b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
