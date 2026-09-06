export const name="bookmarks-simple-duotone";
export const id="dl_4d358231142c4e078680";
export const url=new URL("../icons/bookmarks-simple-duotone.svg?v=44e3dddd0f61b621358f73fd1d5c8f557c6cae94a9de525b5e0815d55fb13a4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
