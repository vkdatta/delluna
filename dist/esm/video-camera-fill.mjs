export const name="video-camera-fill";
export const id="dl_529bd729a1a7bcf8b6b7";
export const url=new URL("../icons/video-camera-fill.svg?v=b12df35e6b0701285ee19af82d000906bc4ddfba6ce976771c6d3115c8fff675",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
