export const name="video_chat";
export const id="dl_128596e54872ceb02a24";
export const url=new URL("../icons/video_chat.svg?v=788eb9d8a6f1154b335ad2428f9b3458f465fa3b4054779d35deac045a5d2ebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
