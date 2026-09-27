export const name="arrows-vertical-duotone";
export const id="dl_bb19b40575ad476a865f";
export const url=new URL("../icons/arrows-vertical-duotone.svg?v=1b82a51e4243f7e98e112c6fad215a1588c104c7f77a33aa40851a163ca16fcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
