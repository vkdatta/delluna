export const name="chart-donut-thin";
export const id="dl_27974af4aa0d4800ad3d";
export const url=new URL("../icons/chart-donut-thin.svg?v=afe9a0d3f38a8d24a5acfa5d83091744aad9bf39edb92f771775555c60b3db54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
