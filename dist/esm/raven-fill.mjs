export const name="raven-fill";
export const id="dl_e89acfe8d58e40aea26a";
export const url=new URL("../icons/R/raven-fill.svg?v=10286490351585f07c20f09efb26896036233e545d46d5575360b39f73863f70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
