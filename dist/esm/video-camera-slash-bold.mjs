export const name="video-camera-slash-bold";
export const id="dl_0b4b124bacb15e8fb16c";
export const url=new URL("../icons/video-camera-slash-bold.svg?v=c6a5cb51f16e0ad44ceefa53d51b6c2397dd4aee1240c1613a5658927fdb33a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
