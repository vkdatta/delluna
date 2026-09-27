export const name="local_laundry_service-fill";
export const id="dl_f583f0250bf8a541d6dd";
export const url=new URL("../icons/local_laundry_service-fill.svg?v=e70fae3d5dbcccae78a080e3edfc11077ec266540af2a67934bd63856143fe78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
