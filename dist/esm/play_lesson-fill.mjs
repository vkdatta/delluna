export const name="play_lesson-fill";
export const id="dl_e853f412945b3b4fe93e";
export const url=new URL("../icons/play_lesson-fill.svg?v=3af8326f18187e4bfb0ba662d9e6708f8fe38ad96c46aa8cd68e8a9eea0e190f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
