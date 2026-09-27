export const name="folder-simple-user-light";
export const id="dl_943d1087b1f343b3a26d";
export const url=new URL("../icons/folder-simple-user-light.svg?v=c9a1e478beee31268bb09a9d7f70d27bd68aad791588da3d274844eb729d1a94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
