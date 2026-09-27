export const name="wifi-x-light";
export const id="dl_a97169cccbee63b314c2";
export const url=new URL("../icons/wifi-x-light.svg?v=07ce041311dc0a65998badd10d6873332063b4bff8ad95bd54c339774902daab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
