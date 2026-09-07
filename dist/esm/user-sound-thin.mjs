export const name="user-sound-thin";
export const id="dl_c7c65c21bbf94bbcbc2c";
export const url=new URL("../icons/U/user-sound-thin.svg?v=b6bb4a5400d00751fa45a1e7a7c9e63087f294ff3de472d1b298048e9c829fa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
