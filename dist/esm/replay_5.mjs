export const name="replay_5";
export const id="dl_2c3fd16274644929a231";
export const url=new URL("../icons/R/replay_5.svg?v=49842d44ee329e81d23279a447fc01b2239e6b8a442812ca90db94789b5bc1fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
