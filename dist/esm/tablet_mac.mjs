export const name="tablet_mac";
export const id="dl_cb4739c78b6a12434ee2";
export const url=new URL("../icons/tablet_mac.svg?v=0f6c29520aba577c41fdd8c47562bff5ea9173e045718f8e9420f06e1646b808",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
