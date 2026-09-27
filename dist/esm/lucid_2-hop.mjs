export const name="lucid_2-hop";
export const id="dl_0cd3b26af4da4fb3a5bd";
export const url=new URL("../icons/lucid_2-hop.svg?v=7a9f8494f91260a2b402ff5c25ca92c1ce4499881d02aa9677a07f3408ee3051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
