export const name="swipe_left";
export const id="dl_cae225ffb0f8459592bc";
export const url=new URL("../icons/S/swipe_left.svg?v=54a8ef7691578023227c3a737e5dfefe27e1eec3c6b77787731433f843e71bc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
