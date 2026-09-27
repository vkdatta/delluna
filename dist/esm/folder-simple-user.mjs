export const name="folder-simple-user";
export const id="dl_c8f62b0596d64e7aa0f7";
export const url=new URL("../icons/folder-simple-user.svg?v=e0c306c8bf7ad7d3a06284df7c172e803c368c679123b3e0ab6eaec520958ab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
