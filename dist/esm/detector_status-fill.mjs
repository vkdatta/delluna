export const name="detector_status-fill";
export const id="dl_e6643d1a8c7a10f726f6";
export const url=new URL("../icons/detector_status-fill.svg?v=d654533f19252304acd85529d20d44c8600f12023fc8d13d19390b024f84ca7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
