export const name="map-pin-simple-area-duotone";
export const id="dl_6322e26a351c4028ba32";
export const url=new URL("../icons/map-pin-simple-area-duotone.svg?v=5100fb4e55ddf3558cafc9c83315d2385542541a58a07e553cd427c50ae97ecf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
