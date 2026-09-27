export const name="floppy-disk-bold";
export const id="dl_3459783772d84e2ca811";
export const url=new URL("../icons/floppy-disk-bold.svg?v=25f9c27ca97e9aa6ceff5cd93be5bf85f4bc9fb6bc2fe57d40881ab24858337c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
