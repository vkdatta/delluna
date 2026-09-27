export const name="forward_media-fill";
export const id="dl_60694b6219dccee0a8d8";
export const url=new URL("../icons/forward_media-fill.svg?v=9c61aa94ac973eae67c332ded336c0d0d36504674f9723140d69f9eb4178be82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
