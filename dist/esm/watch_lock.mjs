export const name="watch_lock";
export const id="dl_0809a55a6751eeea3773";
export const url=new URL("../icons/watch_lock.svg?v=e12c86f79effeb442de3f26410051f5bd3efed4a7d2688823b2368d7647bfa96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
