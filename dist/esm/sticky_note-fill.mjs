export const name="sticky_note-fill";
export const id="dl_dc245bb00b4db88099a1";
export const url=new URL("../icons/sticky_note-fill.svg?v=c2f9885363e12cd69f9f20f8f92aba2f18598d719b228c55955f8129c4aedb0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
