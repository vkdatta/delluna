export const name="arrows-clockwise";
export const id="dl_99af76ae106e4f99a875";
export const url=new URL("../icons/arrows-clockwise.svg?v=325b41e3a1587fcba2812f553bed7917d10c97e50afda86aa21c2d9cc84ed43e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
