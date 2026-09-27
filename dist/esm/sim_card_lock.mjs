export const name="sim_card_lock";
export const id="dl_2cb916a070984cb5a0ab";
export const url=new URL("../icons/sim_card_lock.svg?v=f6b4824e6923af0bf2435f8e77cf00a017218d24b99ff03402047a1f9014bfa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
