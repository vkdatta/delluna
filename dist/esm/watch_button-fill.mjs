export const name="watch_button-fill";
export const id="dl_8041d71958d6c6c93107";
export const url=new URL("../icons/watch_button-fill.svg?v=61de4d14904214ae6cd6a4e9a405d9bb9fa5b36694eaa4a7c849d59847bc7242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
