export const name="voice_chat";
export const id="dl_a541d19585713c93a60a";
export const url=new URL("../icons/voice_chat.svg?v=d87187656b22017ae787cdb1e3fc47c964961915813149ca6e5384cb772549d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
