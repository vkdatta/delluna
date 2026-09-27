export const name="railway_alert-fill";
export const id="dl_42b44fc45f2b0028928c";
export const url=new URL("../icons/railway_alert-fill.svg?v=8ecfeb6edf4fa697878208c1292e072177c0a6591044698e2c080c006b842f0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
