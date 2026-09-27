export const name="video-camera-slash-light";
export const id="dl_7fb1e603881eb3bb92f9";
export const url=new URL("../icons/video-camera-slash-light.svg?v=b3207df3d38198ebbec7bba2e8182d65f0beeeab0431b80c0b30b1501ac27f05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
