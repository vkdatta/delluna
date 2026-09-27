export const name="sync_saved_locally";
export const id="dl_b74d1cf915480c67b1f5";
export const url=new URL("../icons/sync_saved_locally.svg?v=ee82daa8dee209f3f464cdceffbf7acac41020ef672f8a0a2aaee0433b0f6914",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
