export const name="video_chat";
export const id="dl_cc5a735dd6b40fe40452";
export const url=new URL("../icons/video_chat.svg?v=ad25ca27087f73db3dc6f13730d6536ddcde9c4b327bd590af1ed901c0486069",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
