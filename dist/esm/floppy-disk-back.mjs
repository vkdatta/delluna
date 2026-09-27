export const name="floppy-disk-back";
export const id="dl_86d603a97662498f8cd2";
export const url=new URL("../icons/floppy-disk-back.svg?v=b1e10ae62a788047c4c25e75abe8391f41c4d02d319c24cc34a888577fd78640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
