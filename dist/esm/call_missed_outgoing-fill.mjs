export const name="call_missed_outgoing-fill";
export const id="dl_0046803c0beee869dcd3";
export const url=new URL("../icons/call_missed_outgoing-fill.svg?v=4beb429f56bb29b573f204edef284ea70684714c07ace10da9ec020f9f917d03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
