export const name="timer_3_alt_1-fill";
export const id="dl_d9a6a76b8db431a135ea";
export const url=new URL("../icons/timer_3_alt_1-fill.svg?v=19fce4ceefa5d9b1639168f3094a0c1ece627da48966dd2a2e819b8d51278259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
