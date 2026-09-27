export const name="extension";
export const id="dl_9c54e07333e71594b3e0";
export const url=new URL("../icons/extension.svg?v=35b42885fcef08ae3b563bffdb40d9f4cf35559cc2ee84ed3dd42e9aa87cc38e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
