export const name="move_to_inbox";
export const id="dl_d80aa919c3450ed5e356";
export const url=new URL("../icons/move_to_inbox.svg?v=663e69ee7313a7461671961f6ee1037e8a8b73c13549298515cee8fed7f6d9ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
