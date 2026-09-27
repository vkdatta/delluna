export const name="exam-bold";
export const id="dl_6e7aebbf96164b97bd4c";
export const url=new URL("../icons/exam-bold.svg?v=51895b3cf13b5d3e5868a56bb449226d832aeb635eb422921e84c48c2a1ef565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
