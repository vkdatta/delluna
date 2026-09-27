export const name="tag-chevron-light";
export const id="dl_7d0cb4513121ce77a57a";
export const url=new URL("../icons/tag-chevron-light.svg?v=5a65b20675f7512c816cc69720d90f25dc6493f079e6107eea5ac26c7c6211d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
