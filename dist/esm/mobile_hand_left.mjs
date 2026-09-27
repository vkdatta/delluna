export const name="mobile_hand_left";
export const id="dl_9d1eedc3aa65df66a885";
export const url=new URL("../icons/mobile_hand_left.svg?v=fc0c51506ea90a7fd2d718efe3f4c542a72a9f2a0f6744f9e84b956ac87d87f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
