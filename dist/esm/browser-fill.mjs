export const name="browser-fill";
export const id="dl_73774f14855440fca7a1";
export const url=new URL("../icons/browser-fill.svg?v=5b01c1791d52c671812dea5ae4eca8f9668db1bd7c53f1efef3c0194fd9e2316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
