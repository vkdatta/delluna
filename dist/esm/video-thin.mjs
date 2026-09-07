export const name="video-thin";
export const id="dl_546d96b090bf4a3fb570";
export const url=new URL("../icons/V/video-thin.svg?v=b133fd438be3e3e5e8bb85af6429c312c78a1f2236d3b239b1a9a8ca8b58d1ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
