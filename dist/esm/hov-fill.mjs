export const name="hov-fill";
export const id="dl_eb366be33c4715fa6ea0";
export const url=new URL("../icons/hov-fill.svg?v=4b394786c37afffc12c057d170bac7d328652a0cb6d72d7e6708c190233e0752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
