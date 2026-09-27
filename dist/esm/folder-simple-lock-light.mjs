export const name="folder-simple-lock-light";
export const id="dl_92677ee884e74cc98e4d";
export const url=new URL("../icons/folder-simple-lock-light.svg?v=17e7b0880564292f56d6e73de5706808c6c6dd793a96f467c17717660e4907a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
