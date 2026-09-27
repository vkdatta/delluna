export const name="key_off-fill";
export const id="dl_5ca515b972491e903c1f";
export const url=new URL("../icons/key_off-fill.svg?v=872454adc424cd83bfa2da759ec09a33a47dd6191b3713847d086619a61e24f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
