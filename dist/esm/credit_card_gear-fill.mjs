export const name="credit_card_gear-fill";
export const id="dl_17858b630f070533f467";
export const url=new URL("../icons/credit_card_gear-fill.svg?v=618295612b6bcf58eb458925b4a6d32489041dee2a2e4e5862066b89489ce001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
