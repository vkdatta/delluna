export const name="video_stable-fill";
export const id="dl_eb7c650cc82a62260ee6";
export const url=new URL("../icons/video_stable-fill.svg?v=26cf21f2fc594aea8680e0831129d917301bc3b535ed9a1c2da44ab7409d5db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
