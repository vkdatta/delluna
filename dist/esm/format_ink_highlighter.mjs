export const name="format_ink_highlighter";
export const id="dl_9ac27a161ee447689766";
export const url=new URL("../icons/format_ink_highlighter.svg?v=2519a2394870ee9d74639956045976a0882738a8d0e9d9303cb623bfbe9913c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
