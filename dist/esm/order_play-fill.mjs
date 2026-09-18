export const name="order_play-fill";
export const id="dl_c480b039d6924e4eb540";
export const url=new URL("../icons/O/order_play-fill.svg?v=e0a804da5dbb6b6871b03c92902c451a71b54488523c80232cd928bb9817cfe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
