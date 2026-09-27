export const name="clear_day-fill";
export const id="dl_e06f11b4906ef4286e3d";
export const url=new URL("../icons/clear_day-fill.svg?v=5380976be68e424b9d9aded6a135ffbf9065f41a3c771be80f4ee5412bcaa660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
