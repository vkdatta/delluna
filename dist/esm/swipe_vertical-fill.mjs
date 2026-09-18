export const name="swipe_vertical-fill";
export const id="dl_94dee592a9e840789e55";
export const url=new URL("../icons/swipe_vertical-fill.svg?v=5778efb7dd490524f18be103b14bf995ba8723c25babeed7d65c87cc8ee865a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
