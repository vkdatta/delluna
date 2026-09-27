export const name="circles-three-plus-fill";
export const id="dl_aea51acd77dc43e782e5";
export const url=new URL("../icons/circles-three-plus-fill.svg?v=37fc53aaa8f7fafa56e366d4be613dfeedbc1a0f8694db14edcfce16b09746f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
