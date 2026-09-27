export const name="view_object_track";
export const id="dl_44d221ce309bd15ee218";
export const url=new URL("../icons/view_object_track.svg?v=385cec26df006abc646d4e8b3ab0b4786c46b2df61db74801775b62e21565737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
