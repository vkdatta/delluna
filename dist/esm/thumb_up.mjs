export const name="thumb_up";
export const id="dl_5abd52f546baebfcbb11";
export const url=new URL("../icons/thumb_up.svg?v=7751ab053b965fd6dd227b38704cf5083720d0365c56a17fda912466e9a6ca75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
