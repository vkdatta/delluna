export const name="playlist_add-fill";
export const id="dl_1f67dc51bad454341854";
export const url=new URL("../icons/playlist_add-fill.svg?v=ed2e73e82a12ee5c61acbcdd04831fbdcba58da51cd5034a5ecbf7d76580069a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
