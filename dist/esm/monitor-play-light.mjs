export const name="monitor-play-light";
export const id="dl_53fcf540e8974fdfafa0";
export const url=new URL("../icons/monitor-play-light.svg?v=1031c12de58feae1f3cedfb091fbc01c10768d659408dd4094ec438968784325",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
