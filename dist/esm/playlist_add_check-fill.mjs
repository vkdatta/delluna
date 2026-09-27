export const name="playlist_add_check-fill";
export const id="dl_3150fcc499eb950c8de2";
export const url=new URL("../icons/playlist_add_check-fill.svg?v=32431ad002cb25d62609a166997a6270344f145268e9dd7d98fe99d7acb56e8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
