export const name="music_video-fill";
export const id="dl_70541eb75f2c29d0f5fb";
export const url=new URL("../icons/music_video-fill.svg?v=ca074ffd6c391644684d8bcde5112e03e97a2d984fe2a40be48ce28c60ceb229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
