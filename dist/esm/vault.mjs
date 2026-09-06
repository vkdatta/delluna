export const name="vault";
export const id="dl_c4b593a6306144c38da6";
export const url=new URL("../icons/vault.svg?v=3fa6fa27cb43cfdf8c2742b600a51151177308572f71203679a5507990d04c0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
