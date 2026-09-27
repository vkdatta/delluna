export const name="clock-counter-clockwise";
export const id="dl_44f2ff7fd1ec47c2838a";
export const url=new URL("../icons/clock-counter-clockwise.svg?v=c9e1a74fe62c87805312b59c0a643199379a855835818f705c1e8c40d644d752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
