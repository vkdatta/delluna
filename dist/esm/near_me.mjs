export const name="near_me";
export const id="dl_bbbb773b4fffa79a281e";
export const url=new URL("../icons/near_me.svg?v=cd69fd55102df7afec0a921de2ab47cb56ecdd7cdac4b49148b10bff9d9b637a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
