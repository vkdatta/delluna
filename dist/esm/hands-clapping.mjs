export const name="hands-clapping";
export const id="dl_9406634f99dc403a964d";
export const url=new URL("../icons/hands-clapping.svg?v=35c63dd6908440fee8efce906417187dfd9ef5e3c0ccd1f443b592fb6626f367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
