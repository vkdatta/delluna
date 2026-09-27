export const name="air_purifier-fill";
export const id="dl_6b502ae34b492901dd45";
export const url=new URL("../icons/air_purifier-fill.svg?v=a25ce48ead4389c1c39e36beeb68201a5bff17d9680eb3d6166c29c4af2be1e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
