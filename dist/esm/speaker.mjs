export const name="speaker";
export const id="dl_84ca65c47758a4ee8f84";
export const url=new URL("../icons/speaker.svg?v=cc9f48080dfed00eaa1b3f790cb995f6fd6f8851c9cc225c75a008aee46c2be8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
