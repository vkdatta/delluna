export const name="timer";
export const id="dl_85bf35fa22f24b30a410";
export const url=new URL("../icons/timer.svg?v=d55c7a7edb057c0bb70dfb9fcad807d2bea2ad63e7df0f725133dcde66a6e99b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
