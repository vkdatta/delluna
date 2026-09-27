export const name="lucid_1-archive-restore";
export const id="dl_3c9427ec62294c9a844d";
export const url=new URL("../icons/lucid_1-archive-restore.svg?v=34847ea5b86d0e9110a3a5648d84b430542ee29261bb2258de48cf8302e77492",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
