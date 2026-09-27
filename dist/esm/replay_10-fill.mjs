export const name="replay_10-fill";
export const id="dl_00daccc1a42ffb201d17";
export const url=new URL("../icons/replay_10-fill.svg?v=e497f327923ae6c1d6a144ce71dce8c66f31689a6a9b824d860896c404941c0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
