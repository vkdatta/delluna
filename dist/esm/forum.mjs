export const name="forum";
export const id="dl_d33c3c30bcc9479dbf1f";
export const url=new URL("../icons/forum.svg?v=cbfa151b6d337329a5eed0b42c9bae4ab2d5f6e4b532e6d65737bc1371107825",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
