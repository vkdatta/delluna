export const name="cancel_presentation";
export const id="dl_1a01d109121c3eb65d1e";
export const url=new URL("../icons/cancel_presentation.svg?v=4245362ac6b5d2ce445bdc2e3b9cfc592ca294f910e9502cb7952c950008261d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
