export const name="block-fill";
export const id="dl_e280ac3bb58539faac4c";
export const url=new URL("../icons/block-fill.svg?v=a7a2e2b574fa95b04b7a4e4041c65ac6be8341ea12033be34778f277bfd490f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
