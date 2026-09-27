export const name="personal_bag_off-fill";
export const id="dl_b4f9d3eb08cffa6582e6";
export const url=new URL("../icons/personal_bag_off-fill.svg?v=72bd877f74c6d10ecb93aabf2705cdcca1c68532c0f4e1073152b14eba75a594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
