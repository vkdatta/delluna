export const name="oven-duotone";
export const id="dl_b33fa6529eda425585a1";
export const url=new URL("../icons/oven-duotone.svg?v=82fabd2da307b2a85f6528d02593444f697792d34ee83a0068a477b5d4b1a096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
