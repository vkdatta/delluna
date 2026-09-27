export const name="replay_5";
export const id="dl_4f3d00b70ad1d99b171f";
export const url=new URL("../icons/replay_5.svg?v=4f6c69af3869e3e47320c47f063ebf064236692027972ad4f4a2039004c7da35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
