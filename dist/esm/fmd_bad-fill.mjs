export const name="fmd_bad-fill";
export const id="dl_fc177e9e92bd25c5f46c";
export const url=new URL("../icons/fmd_bad-fill.svg?v=8b0e6ed828bd7ca938872cc58ea95c857b94d5ca947647019c3550e6aa2f8765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
