export const name="downloading-fill";
export const id="dl_65fb8d6ed2dd8dc5fa80";
export const url=new URL("../icons/downloading-fill.svg?v=3cefe0e86e5e5d11d623296ea43cc4fd5e1edaa54a6f16484f1cf93a373e6ded",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
