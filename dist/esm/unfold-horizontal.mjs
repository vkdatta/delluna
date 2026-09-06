export const name="unfold-horizontal";
export const id="dl_436188aec8c24001b4c1";
export const url=new URL("../icons/unfold-horizontal.svg?v=7050e1659344f86ff6e25852a2f1d313998a140e22e8b6052168aaeab34e2991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
