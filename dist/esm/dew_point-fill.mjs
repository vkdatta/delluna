export const name="dew_point-fill";
export const id="dl_01c3ee6a193c32a203df";
export const url=new URL("../icons/dew_point-fill.svg?v=50fd007649d3db8667331bfda51bfc864d16585ee88c50a693e45efc25012ee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
