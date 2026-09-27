export const name="report_off";
export const id="dl_76c87142df174713a0f9";
export const url=new URL("../icons/report_off.svg?v=4c82fcb4525f777766357846d8049d845373831e85ce85591369d616be72c417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
