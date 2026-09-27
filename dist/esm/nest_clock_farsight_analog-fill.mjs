export const name="nest_clock_farsight_analog-fill";
export const id="dl_a1edeabe69c23a726ab9";
export const url=new URL("../icons/nest_clock_farsight_analog-fill.svg?v=8e653bf90408711dd4e3c67b31d2c5c706ea8f3bc18f0319a5cff3d6e6a0ec75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
