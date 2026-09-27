export const name="videocam_alert";
export const id="dl_55ccabf9e4cec89b25f9";
export const url=new URL("../icons/videocam_alert.svg?v=21dabb18bbdeffcfb80358b0742556094dabe9d7c2cd7afe2ecb0cd0204c6d62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
