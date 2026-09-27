export const name="track_changes";
export const id="dl_d7407a2aaa006e75f68f";
export const url=new URL("../icons/track_changes.svg?v=a5e0601d20f297964c8bfce817ee972f7b6dcfeffa4d872d583915e7d9f6af22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
