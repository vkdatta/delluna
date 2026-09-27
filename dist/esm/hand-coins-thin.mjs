export const name="hand-coins-thin";
export const id="dl_e74461c8a4394b3f885c";
export const url=new URL("../icons/hand-coins-thin.svg?v=20d1476ff8f333ffd2a0065575b19a48705030c26b14550984e393e370cf9261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
