export const name="railway_alert_2-fill";
export const id="dl_16d772f9a96d4ef7b1d3";
export const url=new URL("../icons/railway_alert_2-fill.svg?v=45075b64723a294988a1e361823967ad2c35b2e65e9eb83efeabf3a5201a3a75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
