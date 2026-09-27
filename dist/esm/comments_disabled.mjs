export const name="comments_disabled";
export const id="dl_b49f60dc1e07bfd4cbdc";
export const url=new URL("../icons/comments_disabled.svg?v=71efa3b5203409eb48fffde3b59652eb7b52194bebaa1035cf0348fffd45d4dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
