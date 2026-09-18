export const name="replay_10-fill";
export const id="dl_1e00452c035344b498d7";
export const url=new URL("../icons/replay_10-fill.svg?v=9f8d5c4caed027ab70b43833b450215843f9725aedb673afe4ff8e02cb955399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
