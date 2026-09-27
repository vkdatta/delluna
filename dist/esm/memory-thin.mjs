export const name="memory-thin";
export const id="dl_c2c8334434634e71a958";
export const url=new URL("../icons/memory-thin.svg?v=0057e99be15c12f3883db315ef2372454ed04ac4230446b9bc272b31cc59a3ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
