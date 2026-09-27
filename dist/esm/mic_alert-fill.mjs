export const name="mic_alert-fill";
export const id="dl_46858908884f59adcd95";
export const url=new URL("../icons/mic_alert-fill.svg?v=2a8b3617caf9703550ddf1009438f09b74f3c4e5f80957117ac39a4cce6bf76d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
