export const name="video-fill";
export const id="dl_a5bc20e60f6b4764b249";
export const url=new URL("../icons/V/video-fill.svg?v=f854826f2ef3f5b68681f318d4c388fb2acd598cb80715c219721ceae483bcd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
