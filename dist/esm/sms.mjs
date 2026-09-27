export const name="sms";
export const id="dl_cc944e3e23735107e2ae";
export const url=new URL("../icons/sms.svg?v=9c82fdc20661849e97e4c8083ce5016a5996714df11877b46cec7e0accebe790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
