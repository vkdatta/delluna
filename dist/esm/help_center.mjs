export const name="help_center";
export const id="dl_cea1b67a28b4bc7c4ffd";
export const url=new URL("../icons/help_center.svg?v=7a59f54260265e5492dcffb944f9a7c0e3e39e9a097b0060e5edd8dbc8f65abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
