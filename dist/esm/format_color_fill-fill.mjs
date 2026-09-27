export const name="format_color_fill-fill";
export const id="dl_6b893e8d440d7bed0cbd";
export const url=new URL("../icons/format_color_fill-fill.svg?v=dac6d754f0378a7bfd41e93fb38ae04613e90fe46ca1ddc8f5075b1dc905759d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
