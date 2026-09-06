export const name="floppy-disk-fill";
export const id="dl_6319b542b6e945bc9976";
export const url=new URL("../icons/floppy-disk-fill.svg?v=5cdcf21a2857922007b846b5ad02490374cf1a9bdf724d8be1fa9240ad3e246c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
