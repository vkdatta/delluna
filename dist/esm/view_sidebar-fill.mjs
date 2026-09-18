export const name="view_sidebar-fill";
export const id="dl_1fd48850402449ccbaa3";
export const url=new URL("../icons/V/view_sidebar-fill.svg?v=cce794c34b350034d54bb313e7f447b111b6e83eea79cf930ea9580950fb4948",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
