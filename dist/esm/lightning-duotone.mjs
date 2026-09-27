export const name="lightning-duotone";
export const id="dl_0fed22bc5e5a489381e6";
export const url=new URL("../icons/lightning-duotone.svg?v=2b9dd52d6b921f5a6ff14711ecbe98921a3f4bc2f7703bd6817bab9b8cf32ee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
