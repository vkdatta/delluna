export const name="attach_email-fill";
export const id="dl_9c2e619bc6537773f002";
export const url=new URL("../icons/attach_email-fill.svg?v=ebcd9fbcf54bb8a973fd8413c0af8ff327a1d8ba5acee700ebef06b03007b4a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
