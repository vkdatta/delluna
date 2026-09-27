export const name="caret-line-right-duotone";
export const id="dl_978d7c0b67644c638efe";
export const url=new URL("../icons/caret-line-right-duotone.svg?v=58e3d5c1606698532f624f49c461712c2bd69e7f0870862c1c56f009483a7744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
