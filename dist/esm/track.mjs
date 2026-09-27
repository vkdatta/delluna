export const name="track";
export const id="dl_3d11649ae6974ebc9749";
export const url=new URL("../icons/track.svg?v=55cef1dccab0d8693650af42b60d8bb366cc183c4571909bed47e62347dc2b4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
