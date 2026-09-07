export const name="app-window-duotone";
export const id="dl_f052a9b763d149ecbe31";
export const url=new URL("../icons/app-window-duotone.svg?v=b528ad83ebe8025555a98bcf176afed223c3e9ae7592214c5dffa61bcf2564b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
