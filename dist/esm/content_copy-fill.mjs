export const name="content_copy-fill";
export const id="dl_00d39b0bc30f4ec89409";
export const url=new URL("../icons/content_copy-fill.svg?v=919524ede88126c491ada8981ef34555d2534d7cb8b9f7de44741e76c017c177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
