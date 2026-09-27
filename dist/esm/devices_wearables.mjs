export const name="devices_wearables";
export const id="dl_bbf526aa6a5c7c4c4f51";
export const url=new URL("../icons/devices_wearables.svg?v=bbae9a190695a89b4146721c20dfa3d009f17fe76fc3ef82d4add87a36b5d326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
