export const name="rss-simple-duotone";
export const id="dl_42004ce6ccf34d9eb68e";
export const url=new URL("../icons/rss-simple-duotone.svg?v=7f04b8b515cb17dd648509353798e835e32568467d8e3cdaa2491b04146775b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
