export const name="play-pause-fill";
export const id="dl_53d51b4e93fa4f54a4d3";
export const url=new URL("../icons/play-pause-fill.svg?v=2bc7cc13a5c007a71497196d3f21b6e6918a6436930c339e0fec651e4e67d77a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
