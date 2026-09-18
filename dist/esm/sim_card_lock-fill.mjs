export const name="sim_card_lock-fill";
export const id="dl_2762757c988c4df6932d";
export const url=new URL("../icons/sim_card_lock-fill.svg?v=52198a32600c4e1555bdf4d97c1554c473678a428dfe55404309703103c11e64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
