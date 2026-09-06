export const name="number-seven-bold";
export const id="dl_cf0596b18b90433388ab";
export const url=new URL("../icons/number-seven-bold.svg?v=e6f966ca4c21ec04cd3795b95c592590ec8666212ffff0876b52ed1f1d7ba42d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
