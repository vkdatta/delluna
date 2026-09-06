export const name="lucid_1-binoculars";
export const id="dl_2a53b2275004476cb924";
export const url=new URL("../icons/lucid_1-binoculars.svg?v=21342df00c8fd753732f169cbf34d598b109d4aa7af89755ea78c5c28632ae09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
