export const name="view_headline-fill";
export const id="dl_d9b47f58aef4b5eb07da";
export const url=new URL("../icons/view_headline-fill.svg?v=3a8fa1c119fc960c9eb3f974af92452fcff8ea6f53bebbdf46207c13b560b663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
