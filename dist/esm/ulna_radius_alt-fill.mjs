export const name="ulna_radius_alt-fill";
export const id="dl_58166a2f292dcdead55b";
export const url=new URL("../icons/ulna_radius_alt-fill.svg?v=47a952b8f23417e93dd1bda0491dd0d210e13a3ad757b6d472f83e2ce8919262",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
