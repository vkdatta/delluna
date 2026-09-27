export const name="clock_loader_40-fill";
export const id="dl_6dc7acad2203547db97a";
export const url=new URL("../icons/clock_loader_40-fill.svg?v=30fed728852b6ccf962844752cfc79dc2ccacf7d854ca5b8bcc6a62a80e68250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
