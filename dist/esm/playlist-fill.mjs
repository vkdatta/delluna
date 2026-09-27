export const name="playlist-fill";
export const id="dl_97a5406ff1bc4ecca463";
export const url=new URL("../icons/playlist-fill.svg?v=6643f3415d513f33c66c40b8f2b6bbb45aee254e49ef5459dc66a31c20d648d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
