export const name="monitor-light";
export const id="dl_82cbfd048df642efb3d4";
export const url=new URL("../icons/monitor-light.svg?v=9a127614aa9eb91d81feb88a8a6388104371d50fc1a7ac1787dff6138e41c687",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
