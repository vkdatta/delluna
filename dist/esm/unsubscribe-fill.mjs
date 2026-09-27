export const name="unsubscribe-fill";
export const id="dl_c3d6fa10e628299c6a4e";
export const url=new URL("../icons/unsubscribe-fill.svg?v=1580a275d94f2371d3d7dda19da590bb4c4cd3865e8c42878b1e811d5999bd17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
