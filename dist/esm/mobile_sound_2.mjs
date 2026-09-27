export const name="mobile_sound_2";
export const id="dl_9640d5a8436f40cff705";
export const url=new URL("../icons/mobile_sound_2.svg?v=24068b8a3d555a40fa1738756452875f70d33539795a363562c162551dc8cd4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
