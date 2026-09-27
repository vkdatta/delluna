export const name="format_image_inline_left";
export const id="dl_e1117374274b605bef7e";
export const url=new URL("../icons/format_image_inline_left.svg?v=18ebbe3f8ccef93af68764e8fca4298b3a6a93321b71b237530ce0a6e06750cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
