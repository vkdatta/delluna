export const name="play_lesson";
export const id="dl_f421fe3d0b5eff86fb7d";
export const url=new URL("../icons/play_lesson.svg?v=1ce597f77552c9314d8b3e06615dfa2817aac054610832e6d31a8149ff4bb8cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
