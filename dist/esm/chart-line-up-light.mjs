export const name="chart-line-up-light";
export const id="dl_2b47cd6d465a4834b8e4";
export const url=new URL("../icons/chart-line-up-light.svg?v=f729563dc16f371811744021680fa5887d219205b0def1d79630d3e26ae6f79d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
