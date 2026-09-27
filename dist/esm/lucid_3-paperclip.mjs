export const name="lucid_3-paperclip";
export const id="dl_72f77282433148ccbaca";
export const url=new URL("../icons/lucid_3-paperclip.svg?v=9d98a2fd3c6dc12a8788a344d9e761c6b2a1c8813037876ca795cd28756b8498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
