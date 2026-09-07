export const name="lamp-pendant-fill";
export const id="dl_25bf28ad533648acbfea";
export const url=new URL("../icons/lamp-pendant-fill.svg?v=d3948fa9c09a0446644076fad7118559cec1bff836bc7f68a8c17d574763c9d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
