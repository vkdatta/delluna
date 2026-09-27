export const name="video-camera-slash-duotone";
export const id="dl_765d172215b64d1c669d";
export const url=new URL("../icons/video-camera-slash-duotone.svg?v=85d89ce29bfca8f43263764342c487a01b008c0089e8083706ae215eb3a59df4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
