export const name="missed_video_call";
export const id="dl_bd7a420d813d53b22973";
export const url=new URL("../icons/missed_video_call.svg?v=dea22d577d1eb3f23c5af3a3d3e0b8b7bee1161c535f119912bfc694e607fb21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
