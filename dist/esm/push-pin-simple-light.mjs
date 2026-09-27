export const name="push-pin-simple-light";
export const id="dl_d60a2779f0144b6791f3";
export const url=new URL("../icons/push-pin-simple-light.svg?v=557568ac09772aabbf2d93753cb67d9c8711d144126dd0b79664fcc68552ba68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
