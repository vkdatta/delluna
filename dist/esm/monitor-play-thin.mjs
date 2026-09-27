export const name="monitor-play-thin";
export const id="dl_7f8e0d6f4bbf4b72ae44";
export const url=new URL("../icons/monitor-play-thin.svg?v=acd0a9b96acd0208a4e7f20be6a013059f29176c7e841414f927fc1e75860806",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
