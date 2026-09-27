export const name="videocam_alert-fill";
export const id="dl_bd4d7adf63fc3872d528";
export const url=new URL("../icons/videocam_alert-fill.svg?v=cd3f468a6b816ed966171e81baf46c386f7a3b515db8bc7aaede96db67999b33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
