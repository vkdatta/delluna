export const name="lucid_1-arrow-left";
export const id="dl_e908de2aa2b74221a6a6";
export const url=new URL("../icons/lucid_1-arrow-left.svg?v=804841f8f9b3f9c0199d93473c638752dca36fac3aef98184bfcf8591092e0ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
