export const name="skull-thin";
export const id="dl_9d27036005ce46d38f8b";
export const url=new URL("../icons/S/skull-thin.svg?v=07db009ad45a6b8dc42065d13415ceb31e7c84b832e504b505f28099ab54da0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
