export const name="area_chart";
export const id="dl_85cc7d117d4a565fe6b5";
export const url=new URL("../icons/area_chart.svg?v=f3708420f2fff2845591f888c67eed96f15102b835dac0f64194b6a0b3933a12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
