export const name="dictionary-fill";
export const id="dl_4920e67476d87325ee52";
export const url=new URL("../icons/dictionary-fill.svg?v=ff956774b37a07f13715b81ca211bd4a74ef0ffb30dce38d7541fe0e7acedbbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
