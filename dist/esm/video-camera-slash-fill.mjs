export const name="video-camera-slash-fill";
export const id="dl_486f51e1718d1c9cd5c1";
export const url=new URL("../icons/video-camera-slash-fill.svg?v=1cb4bf1be6de46f024be49c324641afe36cfa5807f4846691851d8c954a5d0e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
