export const name="queue_music-fill";
export const id="dl_598bbd237d48ed8df8bf";
export const url=new URL("../icons/queue_music-fill.svg?v=b66b28b0f57c7cc2a80698209cde4ce4abb3f24846788369277c79dcc5baf132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
