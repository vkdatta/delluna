export const name="credit_card_off";
export const id="dl_b31d033cd08e93be1582";
export const url=new URL("../icons/credit_card_off.svg?v=170768565d46ebe4c057e21544efd03fa91e2e7ea52bc217b795f1ae3eb7cb4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
