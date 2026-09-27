export const name="confirmation_number";
export const id="dl_6ac5b31cf4434268df91";
export const url=new URL("../icons/confirmation_number.svg?v=7cf789059a77f3999e215f768034690f330c064a37a7839fe605c5e2f2274c0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
