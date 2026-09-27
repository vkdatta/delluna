export const name="pulse_alert";
export const id="dl_539a7527341ddb8a0011";
export const url=new URL("../icons/pulse_alert.svg?v=dfb3fed87e477a476b912d72db902f2b843e74c0fcf7fd45d9cc86cc2f1590e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
