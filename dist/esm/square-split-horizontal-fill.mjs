export const name="square-split-horizontal-fill";
export const id="dl_ce52281e3db8ba3df51b";
export const url=new URL("../icons/square-split-horizontal-fill.svg?v=3761c7e3129496bb5925844e2f6864702a2b6436cf1567777f55d0a04b936f14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
