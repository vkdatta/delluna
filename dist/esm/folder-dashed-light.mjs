export const name="folder-dashed-light";
export const id="dl_c47422244e8b4807a0bb";
export const url=new URL("../icons/folder-dashed-light.svg?v=f930924f4793680de512f39df57ec54979da155b0e5b153051f3548fae6162c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
