export const name="tab_recent-fill";
export const id="dl_9d577adf0e1ff7b2d066";
export const url=new URL("../icons/tab_recent-fill.svg?v=728c470ca634a01340d2ebc35457b9375f5c40bc9fb6a32e0c7df3ba8a6baa1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
