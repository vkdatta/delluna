export const name="other_admission";
export const id="dl_77de5e85dd07e65c6d8a";
export const url=new URL("../icons/other_admission.svg?v=6ba1e13a6b5c5e5dda2a33faa1f24aec73049f63727ca93195cd9acaa3ac399c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
