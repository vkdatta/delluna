export const name="hdr_strong-fill";
export const id="dl_7d25dfb8f67e98b3ece5";
export const url=new URL("../icons/hdr_strong-fill.svg?v=04c3167ca622718fa4d6131777b77dff4205a17841581430bcffe615b6dd6491",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
