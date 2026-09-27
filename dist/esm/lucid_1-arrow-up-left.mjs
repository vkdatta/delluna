export const name="lucid_1-arrow-up-left";
export const id="dl_a1c81d2a7ca54493b25e";
export const url=new URL("../icons/lucid_1-arrow-up-left.svg?v=9205bc1b39911f83c91617a5fe57214ba6ab3a84a2a58bb4619ab820adcb00f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
