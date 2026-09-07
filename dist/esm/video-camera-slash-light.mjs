export const name="video-camera-slash-light";
export const id="dl_1288485edb6642629870";
export const url=new URL("../icons/V/video-camera-slash-light.svg?v=bed781bc6616cf39d8b7e53075244dd4db94cb9092fc6962270031caac7ac288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
