export const name="sticker_add";
export const id="dl_56397bf1f4aa1509c4c9";
export const url=new URL("../icons/sticker_add.svg?v=6e61fc615002bf0dd9eed97ec78a340f13c5e1e1bee029a2679580ccc4563fc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
