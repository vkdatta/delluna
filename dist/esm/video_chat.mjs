export const name="video_chat";
export const id="dl_4287e1a6250c7558bda6";
export const url=new URL("../icons/video_chat.svg?v=00eb8fa238c5f5a1ea3bfc8d6cd055fe341cedf6d3394d600dad5b4d5e3ee3d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
