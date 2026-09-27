export const name="watch_vibration";
export const id="dl_b859fd76e00b04882a69";
export const url=new URL("../icons/watch_vibration.svg?v=2b55d874406ac2446dcbad686d4ae8865da1aa385774f354e64e025a932727ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
