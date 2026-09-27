export const name="cardiology";
export const id="dl_f23bb50bb44ecd4d3af9";
export const url=new URL("../icons/cardiology.svg?v=6eeea2a564f077334c9e8bb592b5bb983b200fb6d6c0521086acd34b88b91041",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
