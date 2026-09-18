export const name="party_mode-fill";
export const id="dl_84a8e3f1df5e4047b986";
export const url=new URL("../icons/P/party_mode-fill.svg?v=42c2230c5d9d098a840343cabb393139d92cb362070e6867354e5708e40e706b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
