export const name="lucid_3-scan-qr-code";
export const id="dl_9c8b604dae594dc68314";
export const url=new URL("../icons/lucid_3-scan-qr-code.svg?v=4cdcde3548b04be9162299374d94666265c528e046c52ea980cdb7be80c8ccf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
