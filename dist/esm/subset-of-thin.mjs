export const name="subset-of-thin";
export const id="dl_9852a84a1bbc79f28872";
export const url=new URL("../icons/subset-of-thin.svg?v=52d5ca5c78a087274b7e4499556788e2333f5de4299264acf8bb9553b9bc0772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
