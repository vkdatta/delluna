export const name="replay_30-fill";
export const id="dl_b9c5093e8b669704d3c0";
export const url=new URL("../icons/replay_30-fill.svg?v=710e9e484da3b09a925592d4f91426c824b4bec9b0f08f2f8f2a77ebfc3bf75c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
