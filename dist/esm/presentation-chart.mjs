export const name="presentation-chart";
export const id="dl_c7c35a5acdf84109826c";
export const url=new URL("../icons/presentation-chart.svg?v=6a435f7d39bfaf6cbe5fe9f0595c98bca7d16907e06234457bebb6c875b50d7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
