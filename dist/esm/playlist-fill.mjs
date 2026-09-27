export const name="playlist-fill";
export const id="dl_97a5406ff1bc4ecca463";
export const url=new URL("../icons/playlist-fill.svg?v=2316e10640b281ecc57d7df77fc1bcd7ec3759b88df1edadf0dc212f3e843129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
