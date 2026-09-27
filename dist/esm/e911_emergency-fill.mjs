export const name="e911_emergency-fill";
export const id="dl_e77c23db9760b7541d8c";
export const url=new URL("../icons/e911_emergency-fill.svg?v=f2b9e194dbc492fc39d27d7956c834843faad1b9f16dd0572efb24650bbb091f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
