export const name="thermometer";
export const id="dl_37f6a17215fc49dbbec4";
export const url=new URL("../icons/thermometer.svg?v=cf6bf8de25dffca03c8443997e797a035ebd440e02c0ec7e72a2bdfca35bc9a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
