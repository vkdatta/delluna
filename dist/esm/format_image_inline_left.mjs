export const name="format_image_inline_left";
export const id="dl_a692d4bdeb540a7e739a";
export const url=new URL("../icons/format_image_inline_left.svg?v=e53854edb8c316b958cedb6cd6cfa7d005923dac3fedaa54fe5818b2f285fc33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
