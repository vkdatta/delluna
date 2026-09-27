export const name="monitor-play-fill";
export const id="dl_9127d837f51b4f5f9c31";
export const url=new URL("../icons/monitor-play-fill.svg?v=0af05b74ab7591f37636451cc9040eb64a5b4d0ecedabf27b43beffb2a478f06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
