export const name="calendar_lock-fill";
export const id="dl_0c183ec485fe8007a93e";
export const url=new URL("../icons/calendar_lock-fill.svg?v=2a6ecfa3363e6c4778dd5d006767cdf4c13d7085200cee43579df9ddb06830fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
