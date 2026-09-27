export const name="arrows-in-line-horizontal-fill";
export const id="dl_45dd055ccf6f4b888f88";
export const url=new URL("../icons/arrows-in-line-horizontal-fill.svg?v=58fcd8861ffcc399805e211b4ce03587b0c0960fb53f90120e21beeefe625a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
