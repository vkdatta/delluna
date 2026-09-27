export const name="copyright-fill";
export const id="dl_5c9c9c6bb1234aeb9ea4";
export const url=new URL("../icons/copyright-fill.svg?v=64f67da862327c6f310f2b5f101ed2a877e8f857c4234a0ce76b051108572133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
