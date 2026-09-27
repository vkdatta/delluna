export const name="air_purifier_gen";
export const id="dl_d2f7f0f3ffdf40bd01f9";
export const url=new URL("../icons/air_purifier_gen.svg?v=19c678517ca9911f51b080030ec5fd73572e55946e473bb74a73283b9605304c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
