export const name="femur_alt";
export const id="dl_756b4f257a7e081f8eb9";
export const url=new URL("../icons/femur_alt.svg?v=03a07d95480ef253db1cf6536891563b86e38fed7fbbf451becf3bbd0b556d2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
