export const name="speaker-simple-high-duotone";
export const id="dl_bb50dd7884bd0f32453e";
export const url=new URL("../icons/speaker-simple-high-duotone.svg?v=f6704bf64330e55596ac83332cd12db7d748214c3cb857f8fe49e915ce9f2a98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
