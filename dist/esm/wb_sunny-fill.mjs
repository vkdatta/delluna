export const name="wb_sunny-fill";
export const id="dl_75396490c5d2712e18f0";
export const url=new URL("../icons/wb_sunny-fill.svg?v=17dee56d390ea0ec23aa3d5e71e67bbdf18676256e05a254d611add3d2e9fe92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
