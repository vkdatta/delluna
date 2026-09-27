export const name="hdr_plus_off";
export const id="dl_64a790725b6aa7d41772";
export const url=new URL("../icons/hdr_plus_off.svg?v=0cc07395e2638c006616f235a9c755c699eb8b04c20a6836da1a1ba886bc7f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
