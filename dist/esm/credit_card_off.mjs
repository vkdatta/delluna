export const name="credit_card_off";
export const id="dl_c5d713a2932786900761";
export const url=new URL("../icons/credit_card_off.svg?v=a6e703838867eea65f635a9cb2752defb5b9a1c31e7de1f272ea80f2916398e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
