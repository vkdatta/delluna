export const name="stop_screen_share-fill";
export const id="dl_e3d92f6e8b447f153b5c";
export const url=new URL("../icons/stop_screen_share-fill.svg?v=a349f1d0f047dc3f388b951930414495a9170117190cc0259167230a60bf6a48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
