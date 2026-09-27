export const name="playlist_remove-fill";
export const id="dl_0c2c9878a635112e0e32";
export const url=new URL("../icons/playlist_remove-fill.svg?v=3d647340c7afb6d133b298b8aee8f58ec5f22816af805171e4f0b95203c3ef5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
