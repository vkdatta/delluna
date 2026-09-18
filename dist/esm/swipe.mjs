export const name="swipe";
export const id="dl_f002880604474f0f84ef";
export const url=new URL("../icons/S/swipe.svg?v=b9a8789dfbc5e50837c2f71a62ded2050b02d65d4aa17c8bfec82da3b7cc84b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
