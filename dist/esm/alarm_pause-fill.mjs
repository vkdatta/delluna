export const name="alarm_pause-fill";
export const id="dl_7d25fa23736496bc4be6";
export const url=new URL("../icons/alarm_pause-fill.svg?v=1730d0fdd13619f39417f7c187e94708e840cb9051523f94a1ecea536e4adf1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
