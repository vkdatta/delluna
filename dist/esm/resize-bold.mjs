export const name="resize-bold";
export const id="dl_9632313474774259b99e";
export const url=new URL("../icons/resize-bold.svg?v=4f20812e53632ef7d4ea156423c5f17b76c964acd714bb20ed03cdb51c02a2ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
