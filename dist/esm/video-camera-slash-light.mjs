export const name="video-camera-slash-light";
export const id="dl_d4425f050a69e9c39a30";
export const url=new URL("../icons/video-camera-slash-light.svg?v=e0eb40f897459793239d9cc6bd424353d72569e84484b2506e9a74a14e2f96a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
