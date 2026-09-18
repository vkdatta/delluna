export const name="right_panel_open";
export const id="dl_af5e308cf3a04e1f8e66";
export const url=new URL("../icons/right_panel_open.svg?v=e235afad2e0463bf546bbada01e500ee0fae493eb1e70ad763b630060643f63a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
