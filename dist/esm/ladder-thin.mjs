export const name="ladder-thin";
export const id="dl_1238f314a40448008b26";
export const url=new URL("../icons/ladder-thin.svg?v=3261fd74e877e3e0ef789cb409fe678f712d89b45e9d831195f5af814e6cfebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
