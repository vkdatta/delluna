export const name="tablet_camera-fill";
export const id="dl_d18675cea324d5be76b0";
export const url=new URL("../icons/tablet_camera-fill.svg?v=5689aa88cab0a757cc91d89f93cc287d7099c1434ee3e21579c53e9a2af574b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
