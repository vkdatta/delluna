export const name="pencil-ruler";
export const id="dl_0b3bc40120e34af7804c";
export const url=new URL("../icons/pencil-ruler.svg?v=832db7e180435d7048f48b05306af8eac053bb133a5d266487227a5ee603ca26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
