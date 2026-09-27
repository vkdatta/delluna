export const name="beach-ball-duotone";
export const id="dl_fde7f2879cda45f1bc55";
export const url=new URL("../icons/beach-ball-duotone.svg?v=f638c48971e7a0dfa5a867e6d593f20ee3c3329b715a35e76b326a579a7f09e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
