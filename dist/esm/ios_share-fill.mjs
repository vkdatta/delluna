export const name="ios_share-fill";
export const id="dl_ce5aee47251d4ffdb8ad";
export const url=new URL("../icons/ios_share-fill.svg?v=09ff4dd166eb4a37efd93deb82ee170438d6c645d97debb144629d29a357dbe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
