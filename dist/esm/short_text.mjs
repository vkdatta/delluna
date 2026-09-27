export const name="short_text";
export const id="dl_ef33d8e3efca4ada41e8";
export const url=new URL("../icons/short_text.svg?v=d0fb6b4de59a8954b49ecff13ab24603c5ce5efb23dba2b30489211b4e7c1983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
