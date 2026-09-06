export const name="disc-duotone";
export const id="dl_6a0e8c5191104af99f27";
export const url=new URL("../icons/disc-duotone.svg?v=76af9c46ee141b925ffa2431f24a9c2e31ce893cc692a02bb9a160210174d25e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
