export const name="android_cell_5_bar_plus-fill";
export const id="dl_6a61dba2816eab993a5a";
export const url=new URL("../icons/android_cell_5_bar_plus-fill.svg?v=3770c566ae4a4d1ebb843a86da529fa6dda1e8056bbed3524fe5b111f8568e67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
