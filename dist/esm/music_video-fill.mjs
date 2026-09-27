export const name="music_video-fill";
export const id="dl_381503d1a44ee849fe85";
export const url=new URL("../icons/music_video-fill.svg?v=b9d1d9c523b865b7151c48dd5cf29b74e89a80af22f64eec3a7d842b66a09041",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
