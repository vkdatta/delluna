export const name="replay_30-fill";
export const id="dl_4ef737dc14d60d8b8718";
export const url=new URL("../icons/replay_30-fill.svg?v=a13daaa2319b4060e5a4bbc3be08cf7046e20b82a1bfc6fc26d36630c6780869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
