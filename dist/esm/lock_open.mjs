export const name="lock_open";
export const id="dl_66a3308cb800acd69f4f";
export const url=new URL("../icons/lock_open.svg?v=eab0104753a31beec9f73508631ef26c3ec104fe4298c0bb8630e6df6230253b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
