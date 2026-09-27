export const name="playlist_add-fill";
export const id="dl_90f9832c24db7f824785";
export const url=new URL("../icons/playlist_add-fill.svg?v=b2056c1702e0b4eb0b6e20cc1d9276091359942baa2dc1f08589489c96e26324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
