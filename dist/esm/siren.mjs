export const name="siren";
export const id="dl_ec6f7bc720ea53c11f2e";
export const url=new URL("../icons/siren.svg?v=9e237ac498b2e247f0ccf10b0fc6d334684badd74403b5aef53ee64aac07f646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
