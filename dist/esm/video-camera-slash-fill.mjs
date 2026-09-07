export const name="video-camera-slash-fill";
export const id="dl_64e3914baf4640389b79";
export const url=new URL("../icons/V/video-camera-slash-fill.svg?v=1cb4bf1be6de46f024be49c324641afe36cfa5807f4846691851d8c954a5d0e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
