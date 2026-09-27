export const name="number-seven-bold";
export const id="dl_cf0596b18b90433388ab";
export const url=new URL("../icons/number-seven-bold.svg?v=ad55041685e34f97a20d634758b3985437909e532254ce1dd7d1c7296212b22b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
