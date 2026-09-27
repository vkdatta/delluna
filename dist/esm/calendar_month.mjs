export const name="calendar_month";
export const id="dl_4f198d94df7ec05b7c3d";
export const url=new URL("../icons/calendar_month.svg?v=3198c0e83c6e1de2c03f9132c4bd1fb2eb01162719e949d0a31cc5f0fbf453a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
