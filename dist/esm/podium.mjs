export const name="podium";
export const id="dl_978558085896ee2bb1cf";
export const url=new URL("../icons/podium.svg?v=063997a639585db669658b85f71eb74a171e040f0bea4626ae200f425cf7952c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
