export const name="deselect-fill";
export const id="dl_91d6298edbac508c51d1";
export const url=new URL("../icons/deselect-fill.svg?v=51d895ad7781114b51ae3fb9328dec98989672d5a934e18ab63dbc0e98395ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
