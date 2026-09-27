export const name="unplug";
export const id="dl_9810c88caab34c00ab3a";
export const url=new URL("../icons/unplug.svg?v=d2a87a21518ec253981eb2a511ec7cb33f33265b60032286de30ded5dfa1e89e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
