export const name="lucid_1-clipboard-paste";
export const id="dl_02c5f1b90a3e4561a6ea";
export const url=new URL("../icons/lucid_1-clipboard-paste.svg?v=07d452c67604a514479cebb81fab19490dcf1ac3b1d7e687825da1551f951a69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
