export const name="how_to_vote-fill";
export const id="dl_b7c8d18ba8cba66bd223";
export const url=new URL("../icons/how_to_vote-fill.svg?v=b90110e7485f18d8a6e940190928e488e7f205ec4021570642ec26a068eb262f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
