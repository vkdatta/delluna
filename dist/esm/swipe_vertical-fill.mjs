export const name="swipe_vertical-fill";
export const id="dl_4d692ccb8714e7cb82f9";
export const url=new URL("../icons/swipe_vertical-fill.svg?v=08480b6cd674a1768d6217accefc5368d74d7dddcdb612e5994de434d79ca013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
