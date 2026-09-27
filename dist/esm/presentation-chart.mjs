export const name="presentation-chart";
export const id="dl_c7c35a5acdf84109826c";
export const url=new URL("../icons/presentation-chart.svg?v=df3dcaab685ec80e82221da89d446e50391207ec9a714435219b25a026d154a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
