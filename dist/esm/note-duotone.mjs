export const name="note-duotone";
export const id="dl_1e792129808641cda2eb";
export const url=new URL("../icons/note-duotone.svg?v=5d1e6073f6bfd37c1326b084b1d9323a1178202b4907edf2294e21ec6ed1c04c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
