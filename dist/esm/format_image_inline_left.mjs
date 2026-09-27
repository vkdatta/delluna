export const name="format_image_inline_left";
export const id="dl_cc8a5f42709648aa1327";
export const url=new URL("../icons/format_image_inline_left.svg?v=917c7176258cf5963ffae13cc02f408957b21b5ce426328eda046ac2a9143ba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
