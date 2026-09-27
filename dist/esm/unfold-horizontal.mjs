export const name="unfold-horizontal";
export const id="dl_436188aec8c24001b4c1";
export const url=new URL("../icons/unfold-horizontal.svg?v=8520ef178226873d3ab7b355dbc433baea04982ba1b4d6df44ec7ba59fe706db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
