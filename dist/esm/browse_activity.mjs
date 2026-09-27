export const name="browse_activity";
export const id="dl_692801be00d8cfb0a5f1";
export const url=new URL("../icons/browse_activity.svg?v=4b832e68414af3c5d6159f917415d630f5fe9be7b703807b5b6d81dacb8f70cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
