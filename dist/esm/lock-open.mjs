export const name="lock-open";
export const id="dl_6b4675e037f4432abe53";
export const url=new URL("../icons/lock-open.svg?v=86e7f724dd086f13fa083538404e2f7376cb2063295f5f9fbd3f9f3f43bfd216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
