export const name="mobile_screensaver";
export const id="dl_52f7fbca0840439faa3c";
export const url=new URL("../icons/mobile_screensaver.svg?v=aa5aebc9d206f51845ebfb0faeaf1f57ae0c1837d74a83a8d73e73c77f92f669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
