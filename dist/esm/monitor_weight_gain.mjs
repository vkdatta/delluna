export const name="monitor_weight_gain";
export const id="dl_cd6d113eccc609098efe";
export const url=new URL("../icons/monitor_weight_gain.svg?v=2d6fa6d4d6f4a77b8ca6d8e7a8eb5eaead3922d23a23105d219e723dcaa0ed18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
