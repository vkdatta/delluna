export const name="highlight";
export const id="dl_f89784674c864bbf729a";
export const url=new URL("../icons/highlight.svg?v=ade517182bc261b9a0aca9b49c9ca248fd1f13c0b0ba23010bf0ac51eaea9fe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
