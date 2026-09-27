export const name="chart-line-duotone";
export const id="dl_88789ca6cea942348a46";
export const url=new URL("../icons/chart-line-duotone.svg?v=5ff7c3b3a4feb5d5cc12b9cd28be2a5aeea701b7486bc3333541604dfe42b348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
