export const name="broadcast_on_home-fill";
export const id="dl_7484d36f27dd434b684b";
export const url=new URL("../icons/broadcast_on_home-fill.svg?v=d319a2afe6b111f99e0829e2d586f18153bc2e80994fbafaca0d4f4457a55c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
