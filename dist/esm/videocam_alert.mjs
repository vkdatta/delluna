export const name="videocam_alert";
export const id="dl_b13078cb8b6a4cccbf95";
export const url=new URL("../icons/videocam_alert.svg?v=a90453bf0373e4c0e6bf1a76cd8b6d6a58e9c68bfcbc681bdc1d884320366800",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
