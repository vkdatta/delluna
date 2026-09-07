export const name="brackets-round-fill";
export const id="dl_0a9d90bf8e3d4987927c";
export const url=new URL("../icons/brackets-round-fill.svg?v=d746b68a93a2b7748e529af2388a196a21113710459367e59b634b31225cb1f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
