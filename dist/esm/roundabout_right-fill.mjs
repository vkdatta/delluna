export const name="roundabout_right-fill";
export const id="dl_3791a07392cf61bc3408";
export const url=new URL("../icons/roundabout_right-fill.svg?v=eacb84b1d2199364d3692c378394f788eeef7c618104a2982c3df70abec35e0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
