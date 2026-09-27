export const name="do_not_disturb_off-fill";
export const id="dl_bbcafbe60dc6a749ee4d";
export const url=new URL("../icons/do_not_disturb_off-fill.svg?v=a359c6a2f9ec6361c04c565f99de6de0ac7f4b65b15155712b2307af589aa57a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
