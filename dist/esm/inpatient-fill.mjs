export const name="inpatient-fill";
export const id="dl_6be845d4d9efb7320a78";
export const url=new URL("../icons/inpatient-fill.svg?v=115b3d23bb81f13ac20dde462cb24a743c773e9c231980b4ee586eb1c267f080",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
