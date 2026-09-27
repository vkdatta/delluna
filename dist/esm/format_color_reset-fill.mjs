export const name="format_color_reset-fill";
export const id="dl_bfd812bf5324c0a5b336";
export const url=new URL("../icons/format_color_reset-fill.svg?v=d3a403bddb3cd05d4b03d45d8e8cf87894e1c664630f767c4fb2042a559301b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
