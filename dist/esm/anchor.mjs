export const name="anchor";
export const id="dl_d95a1219c90443918da6";
export const url=new URL("../icons/anchor.svg?v=d7c76e2b7fb4948c5ae3f2ac0d0191074c1d1c02e0a2b27a3f688e1f6681766d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
