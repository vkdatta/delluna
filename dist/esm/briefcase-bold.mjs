export const name="briefcase-bold";
export const id="dl_c2dbd1c7725e416389ba";
export const url=new URL("../icons/briefcase-bold.svg?v=6a15cc8b1a58ac6ee5ff731585f69b473078b77a5aaa54a51ec278a024923f65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
