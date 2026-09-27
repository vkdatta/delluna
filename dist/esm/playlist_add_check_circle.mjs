export const name="playlist_add_check_circle";
export const id="dl_1f7943a7f77a1fe9e088";
export const url=new URL("../icons/playlist_add_check_circle.svg?v=8d6ba83674c55629970dc94fdb6361e39a3ed0f440c1d162650dd1e20a62720f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
