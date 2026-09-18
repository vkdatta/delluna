export const name="format_image_inline_left";
export const id="dl_4f725a76a3934ba883a1";
export const url=new URL("../icons/format_image_inline_left.svg?v=852ebd2304a7a45208e1c4288078124ca1ca3a78b5678613abbd1d5c868f98a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
