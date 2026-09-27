export const name="gas-can-fill";
export const id="dl_58856f6be85943959581";
export const url=new URL("../icons/gas-can-fill.svg?v=08c81421e4f0fc8987e448d170dc28cdb103593021403918c8dfb168f8f6376e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
