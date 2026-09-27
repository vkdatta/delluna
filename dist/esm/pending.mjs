export const name="pending";
export const id="dl_328dd32a51c876fd7a9c";
export const url=new URL("../icons/pending.svg?v=f93ea6d1e26ce842de68827b68b3f418e13ff258bd9b5eda243b2c584f896306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
