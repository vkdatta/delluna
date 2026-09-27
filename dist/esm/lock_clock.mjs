export const name="lock_clock";
export const id="dl_3f05a1346c041b213221";
export const url=new URL("../icons/lock_clock.svg?v=74161c3c293c0803b120c5b93bc11c8bc918b2750ddc16a3cf510762da12df56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
