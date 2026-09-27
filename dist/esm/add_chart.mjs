export const name="add_chart";
export const id="dl_6d4737ebe984069fa831";
export const url=new URL("../icons/add_chart.svg?v=99584aa17da211e0e3f58823661993c17357bf4703a259458af67c9347516fc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
