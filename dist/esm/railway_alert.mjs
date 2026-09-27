export const name="railway_alert";
export const id="dl_d47ba57689e5c002289a";
export const url=new URL("../icons/railway_alert.svg?v=c726f6f26fbb390989e7a2a20cb54f4307acd42c851b611418f700639a71502f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
