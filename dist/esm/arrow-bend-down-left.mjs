export const name="arrow-bend-down-left";
export const id="dl_4db399f43bc04f178fd3";
export const url=new URL("../icons/arrow-bend-down-left.svg?v=b9859ef3ee539a98c0169c1198d713c3d30790d47100f28dacd886176fb07ccb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
