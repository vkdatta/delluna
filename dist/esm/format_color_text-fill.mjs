export const name="format_color_text-fill";
export const id="dl_ebad6dd4b5244b6bfd2b";
export const url=new URL("../icons/format_color_text-fill.svg?v=f5b1b39eb245c628c0c802771cd90a2b5f1ee08d20caa76b9b0733922327ab68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
