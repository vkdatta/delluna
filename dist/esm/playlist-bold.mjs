export const name="playlist-bold";
export const id="dl_0ad0a923912940bc8e40";
export const url=new URL("../icons/playlist-bold.svg?v=262ccad6f6d8ec95e3356b7c79e76b7302c7c5ce36ae4090213836ad33ab43c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
