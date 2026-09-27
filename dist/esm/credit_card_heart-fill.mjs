export const name="credit_card_heart-fill";
export const id="dl_4d048629e7c24be7f9f4";
export const url=new URL("../icons/credit_card_heart-fill.svg?v=d10a6cd10f72e698d20312aa2e6776097427afe9d7b3876532d778256f1609d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
