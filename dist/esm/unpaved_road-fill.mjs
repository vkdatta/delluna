export const name="unpaved_road-fill";
export const id="dl_dc95afa3ec2d4001bca7";
export const url=new URL("../icons/unpaved_road-fill.svg?v=1730f6e140152a2014cdac4bc5df38239754aa1cffb3801d5917eae03116106e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
