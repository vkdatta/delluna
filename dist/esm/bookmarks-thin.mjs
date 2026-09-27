export const name="bookmarks-thin";
export const id="dl_211d43ea14da4cdc8b3a";
export const url=new URL("../icons/bookmarks-thin.svg?v=d566b27bc8f884ad9e99d1fde22a7a7b78d769cdd68d3e3787b242682e365b7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
