export const name="push-pin-slash";
export const id="dl_35f22e0f4a1147e88a34";
export const url=new URL("../icons/push-pin-slash.svg?v=5d6cd6aa9c82de1666dbe68660526a0963127fdc79edf3ad3551dd94e7909e9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
