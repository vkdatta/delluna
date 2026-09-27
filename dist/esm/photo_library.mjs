export const name="photo_library";
export const id="dl_c1a54c621175fcff2d15";
export const url=new URL("../icons/photo_library.svg?v=f13afeb797ef1bf886d4bf1c653da9d997ece8b67e61a37dfad09173c48b03bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
