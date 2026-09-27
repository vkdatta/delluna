export const name="folder-simple-user-light";
export const id="dl_943d1087b1f343b3a26d";
export const url=new URL("../icons/folder-simple-user-light.svg?v=0464f49438601947d28022aa571985afc15a69fc41c244192cee36a500a4589e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
