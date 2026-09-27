export const name="bar_chart_4_bars-fill";
export const id="dl_13c00fdcf36d0f74f092";
export const url=new URL("../icons/bar_chart_4_bars-fill.svg?v=86f19fdf753032685fc13ef18138e5a68f89130ca000bfe6ed3c7313fb83ef8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
