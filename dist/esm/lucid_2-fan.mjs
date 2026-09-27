export const name="lucid_2-fan";
export const id="dl_a0f935f76cea427295bc";
export const url=new URL("../icons/lucid_2-fan.svg?v=1ce7b8968bf9ad921715fa77509470c107d2370bba0336a4863003bec2d2a4c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
