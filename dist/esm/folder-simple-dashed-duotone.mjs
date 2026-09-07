export const name="folder-simple-dashed-duotone";
export const id="dl_892683d7f7f34d2ca5d6";
export const url=new URL("../icons/folder-simple-dashed-duotone.svg?v=baa20bb38201f95fb578fa35bd2235c11b8dcdcaaf3aa8ffa1df34dddd845385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
