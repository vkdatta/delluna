export const name="shadow";
export const id="dl_764f63f2a5ac4a5bafb9";
export const url=new URL("../icons/shadow.svg?v=c2810d8a84e82044a6348084580bc29d99f1f36c7a6e3b22981ad46f58ec5126",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
