export const name="devices_other-fill";
export const id="dl_0c3d845c6dbc47068aeb";
export const url=new URL("../icons/devices_other-fill.svg?v=2b30631189cd181241a0dd7cf5d036d1d941b58d3b3af41b2eee802228634ab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
