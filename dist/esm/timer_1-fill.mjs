export const name="timer_1-fill";
export const id="dl_28daa8f4ce2dd932904f";
export const url=new URL("../icons/timer_1-fill.svg?v=389da71494218e0fa61adeeb540b34b137530dffa11f15ed071bb01ca2e524c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
