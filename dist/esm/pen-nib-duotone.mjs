export const name="pen-nib-duotone";
export const id="dl_46cce5d84e4b4e339806";
export const url=new URL("../icons/pen-nib-duotone.svg?v=c06497565ba5dfe6289edc24796b5b3d2e129624a71179c3abd62e62dfe879a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
