export const name="arrow-down-fill";
export const id="dl_cf68de2e45614fdda4ba";
export const url=new URL("../icons/arrow-down-fill.svg?v=71ce344766fafd0696307b564b245d94e6f35191488411e26668eb98dd5ee9cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
