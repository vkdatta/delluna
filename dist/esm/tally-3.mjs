export const name="tally-3";
export const id="dl_0db9c3d735a5499797db";
export const url=new URL("../icons/tally-3.svg?v=28cf0562f938351bcc5bb7d393aa7bb4c5d13e759e6a6afb5848aab8cdb7aad7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
