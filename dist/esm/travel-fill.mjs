export const name="travel-fill";
export const id="dl_9b6872b1995deb30b31f";
export const url=new URL("../icons/travel-fill.svg?v=d4a15cbbe1d79405a36237b2811f0969f324ea719da5149f9f81c349e9badad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
