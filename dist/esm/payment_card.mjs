export const name="payment_card";
export const id="dl_7cbfd79f45f7cc713fe2";
export const url=new URL("../icons/payment_card.svg?v=c7a737b994e7d07405711e77c2dd539b84adfc45596140f6dff286e64218233b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
