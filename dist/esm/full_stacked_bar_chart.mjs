export const name="full_stacked_bar_chart";
export const id="dl_73600751e76be56313bd";
export const url=new URL("../icons/full_stacked_bar_chart.svg?v=e97272e0dadca9766ef99537d2cc855b8322f81f40a1e91d512c6b26c0662b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
