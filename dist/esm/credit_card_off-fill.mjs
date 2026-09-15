export const name="credit_card_off-fill";
export const id="dl_c641640adc604de39dae";
export const url=new URL("../icons/C/credit_card_off-fill.svg?v=842889f664eda27016a00353046521f004c72cc3fe723f11cb2192ceb653eb87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
