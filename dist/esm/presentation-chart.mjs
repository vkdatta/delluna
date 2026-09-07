export const name="presentation-chart";
export const id="dl_c7c35a5acdf84109826c";
export const url=new URL("../icons/presentation-chart.svg?v=aaeca65f05863916d06d011a0129e10f0b170e83afa8a894fde74a4a39823f62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
