export const name="order_play";
export const id="dl_297736a9324674cfacbf";
export const url=new URL("../icons/order_play.svg?v=428918a4d44164f8e4c22ab5f40132a7fa0823b2133d58cc0cd0030b682d0027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
