export const name="local_activity-fill";
export const id="dl_d67f48204101478a802d";
export const url=new URL("../icons/L/local_activity-fill.svg?v=fef40e4ea1ce9397deeec0fc5c86d22bb382f93ae01fe5f7fcb961bf65145758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
