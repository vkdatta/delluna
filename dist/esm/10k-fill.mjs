export const name="10k-fill";
export const id="dl_88ced50118d1071e8e48";
export const url=new URL("../icons/10k-fill.svg?v=0b061c0ed3f8af0131b54e3ce7aeafe2f8d946d5f2dc8fc58b915fed1d685852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
