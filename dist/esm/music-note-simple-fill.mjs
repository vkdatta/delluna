export const name="music-note-simple-fill";
export const id="dl_54447d87b39d44c5b525";
export const url=new URL("../icons/music-note-simple-fill.svg?v=09cc252097f033eb48d83787c0035642e909bdb7bf96786b20cd4ec1789e68cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
