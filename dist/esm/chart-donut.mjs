export const name="chart-donut";
export const id="dl_2178753e95194488b28b";
export const url=new URL("../icons/chart-donut.svg?v=97ff1a816f1feeb89db40a36d54f58de360504d8e25c6fc7f2de8fe5e323dd77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
