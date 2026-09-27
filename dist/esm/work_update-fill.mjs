export const name="work_update-fill";
export const id="dl_983dc7cc0e002175e055";
export const url=new URL("../icons/work_update-fill.svg?v=ff6ec715bfbbecddcb03233a0e85d5ba9457c645d2652cef34c4959bf4ae713e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
