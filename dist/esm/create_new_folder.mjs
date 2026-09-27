export const name="create_new_folder";
export const id="dl_4eebc484c7333d277f61";
export const url=new URL("../icons/create_new_folder.svg?v=1f6dfdd744f498529e0ff2117574abcba6842f98cf6ff164baf6aadb53063081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
