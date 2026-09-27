export const name="watch_check-fill";
export const id="dl_15ead6a0061bad0f0a8b";
export const url=new URL("../icons/watch_check-fill.svg?v=e232cd01e09df2f991a9291559543e39491eab12ca2089ddead19e7401240740",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
