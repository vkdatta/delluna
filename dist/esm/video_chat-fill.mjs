export const name="video_chat-fill";
export const id="dl_b92f9aab029131e67c3a";
export const url=new URL("../icons/video_chat-fill.svg?v=0a20110488503c3b72acfe5dfb31a4cd897c63b5d6fab387e8004a2d42f12b57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
