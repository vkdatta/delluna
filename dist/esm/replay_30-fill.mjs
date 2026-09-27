export const name="replay_30-fill";
export const id="dl_9250ecfa4b2cf60918c2";
export const url=new URL("../icons/replay_30-fill.svg?v=f65d786fc2b910623803cd8053688f4c91ec34e8fb4a80a6771a9c4f18cb24c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
