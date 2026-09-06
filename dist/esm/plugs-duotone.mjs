export const name="plugs-duotone";
export const id="dl_0b747fa43c45462196c1";
export const url=new URL("../icons/plugs-duotone.svg?v=0aebcf3218ac4d34a426629c56340730bb252cd8dc11c1d3626ffcf5d843e5b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
