export const name="replay_10-fill";
export const id="dl_5b48d63a48a22c8d1f8f";
export const url=new URL("../icons/replay_10-fill.svg?v=aaa7ad27dea4f997a9d6dd08149290bb2977aef2c7ec8a2ff7bb3e801c1c5a43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
