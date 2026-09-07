export const name="number-two-fill";
export const id="dl_1954c652b93349cab6d0";
export const url=new URL("../icons/number-two-fill.svg?v=c42aeda3bee2018b10a1993f02e198f41812377c1ec00ad7343c38e57c150a7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
