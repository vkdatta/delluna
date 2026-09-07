export const name="wave-triangle-thin";
export const id="dl_45c64a7971df4284a1d5";
export const url=new URL("../icons/W/wave-triangle-thin.svg?v=9df1727d774401943cc518df6a726b6d83ccd3d9efaad93ae097c303753b32aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
