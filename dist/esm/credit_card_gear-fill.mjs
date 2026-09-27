export const name="credit_card_gear-fill";
export const id="dl_5b16cdca10ea8e09e63a";
export const url=new URL("../icons/credit_card_gear-fill.svg?v=f36ef3bc7f0f0e5043bdb57089550ecdc5aeb416cc88581cdc7899f40eee203a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
