export const name="grid_off-fill";
export const id="dl_46b42b5628229a16ce06";
export const url=new URL("../icons/grid_off-fill.svg?v=6c85d719fa67213700adc7055c12b8b92f741c4d3d58637b283281d22080c22f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
