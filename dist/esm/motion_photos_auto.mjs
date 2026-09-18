export const name="motion_photos_auto";
export const id="dl_ff00ba737f0d48c28d5b";
export const url=new URL("../icons/motion_photos_auto.svg?v=15dde3ebc5ab22729e68629a211253eef75cf453a78261fa6a453fb00c57d57d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
