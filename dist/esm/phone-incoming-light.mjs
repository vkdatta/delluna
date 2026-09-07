export const name="phone-incoming-light";
export const id="dl_e2b3fdfe06844f128c88";
export const url=new URL("../icons/phone-incoming-light.svg?v=4652359960e7e5a80b78f2f797c3af90b86635ece3687b1a27a18e1ae3bf02ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
