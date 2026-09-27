export const name="number-seven-bold";
export const id="dl_cf0596b18b90433388ab";
export const url=new URL("../icons/number-seven-bold.svg?v=122975a9c96162d83645689e11be374e1b3267f451d2590bf964eac28df9ccad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
