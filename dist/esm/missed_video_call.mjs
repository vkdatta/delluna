export const name="missed_video_call";
export const id="dl_188233077eb321b59751";
export const url=new URL("../icons/missed_video_call.svg?v=bc20d48b085fc675131a6bd5207e152534c218b5a9132cb1c7a6dcfdfec19f9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
