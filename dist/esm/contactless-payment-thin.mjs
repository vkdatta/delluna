export const name="contactless-payment-thin";
export const id="dl_d230a64401a94ad48289";
export const url=new URL("../icons/contactless-payment-thin.svg?v=6a89b0c7a3877dd660ec7290115cdc4bf2eb82db49388a78b1e86ba381eb4819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
