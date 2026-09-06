export const name="hand-tap-light";
export const id="dl_5011452b343241d2822f";
export const url=new URL("../icons/hand-tap-light.svg?v=6926ab72f4d348a1332a35488c65880116005196fab9e0e692f15ae1142e899d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
