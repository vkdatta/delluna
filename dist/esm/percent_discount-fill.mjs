export const name="percent_discount-fill";
export const id="dl_e7996f707b814778aede";
export const url=new URL("../icons/percent_discount-fill.svg?v=284847ee47a65cf6a0a208ce174a031411aeb52b54e1a2c15db16da49231f967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
