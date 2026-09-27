export const name="lucid_1-chart-line";
export const id="dl_1cf978d213d0438dae4a";
export const url=new URL("../icons/lucid_1-chart-line.svg?v=b4c39d3147c888b108b244573b0cc488cdaeda82622e9cb2850b0b34ddf20e75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
