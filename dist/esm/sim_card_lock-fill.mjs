export const name="sim_card_lock-fill";
export const id="dl_89140360b579ca1ec8d4";
export const url=new URL("../icons/sim_card_lock-fill.svg?v=fdd265b30efc62c898d86bca17dde4b09942bc2c90ab4f8e4aa45d67bbfdb3ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
