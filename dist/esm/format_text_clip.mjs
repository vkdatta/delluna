export const name="format_text_clip";
export const id="dl_96ee5a733284829d9982";
export const url=new URL("../icons/format_text_clip.svg?v=01d72663cba29a2fc04d87c619f1fb4dc87a7ad1bbfb8ebd409b073a663f52aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
