export const name="x";
export const id="dl_b381d6b75a2d10470864";
export const url=new URL("../icons/x.svg?v=09df28e09594ee7465b8ea20405ff4641dc12a516eb320f791da070fe40a411c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
