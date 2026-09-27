export const name="sim_card_lock-fill";
export const id="dl_bb8f431edbbe8847ea27";
export const url=new URL("../icons/sim_card_lock-fill.svg?v=7786613480f521fd03afa9ed74018b65a942079daf6d21ace3e7fb7a4019c684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
