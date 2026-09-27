export const name="railway_alert_2-fill";
export const id="dl_185cf51d8dc8b612c499";
export const url=new URL("../icons/railway_alert_2-fill.svg?v=c47c1412f1c64fccfc012c4a7491ac871c6d94b52b14081864f4c5ace4febd17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
