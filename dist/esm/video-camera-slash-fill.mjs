export const name="video-camera-slash-fill";
export const id="dl_5e76eba1cbe16a1691c6";
export const url=new URL("../icons/video-camera-slash-fill.svg?v=598c0c0f82f2c3749fe7b6ad1791f44ad3faacd3442ed34b4c0fdaa6e9850322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
