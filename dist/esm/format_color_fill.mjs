export const name="format_color_fill";
export const id="dl_998c67009b791895f3e3";
export const url=new URL("../icons/format_color_fill.svg?v=36639a10c413da4e1e3f7785ad706c532f0b6bce4509f64c2af96bacc85d3739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
