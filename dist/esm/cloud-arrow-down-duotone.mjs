export const name="cloud-arrow-down-duotone";
export const id="dl_88b5380f010f4efcb8db";
export const url=new URL("../icons/cloud-arrow-down-duotone.svg?v=1341e11347d8d98da09fcb1e7279de7cd4cade579ce14d7f26d82ac5afb4a59a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
