export const name="format_color_fill";
export const id="dl_998c67009b791895f3e3";
export const url=new URL("../icons/format_color_fill.svg?v=b74b40cbea63dcda7261fe8114f0c18a8034ea06c8e9909879b6a1420bd66d2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
