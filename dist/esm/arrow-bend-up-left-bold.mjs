export const name="arrow-bend-up-left-bold";
export const id="dl_bc2ff91f9e514d45ac44";
export const url=new URL("../icons/arrow-bend-up-left-bold.svg?v=06836ca87bc1af3d22c687a33ce2b134d6c87cf0ea4843986c7ec223a414f95c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
