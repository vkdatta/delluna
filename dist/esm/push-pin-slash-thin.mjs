export const name="push-pin-slash-thin";
export const id="dl_fb3e677af094448c890c";
export const url=new URL("../icons/push-pin-slash-thin.svg?v=6dd90c62040ac155251006083fbfc20defab1099aa991499e5efbfa6778443fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
