export const name="humerus";
export const id="dl_b2ba625263b680b1d357";
export const url=new URL("../icons/humerus.svg?v=a72b294298a421a231c4a5d1481dbbe156ed2822e01f426d96401235cfd51c54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
