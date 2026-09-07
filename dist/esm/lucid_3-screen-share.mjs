export const name="lucid_3-screen-share";
export const id="dl_7eb9b26f54244416b734";
export const url=new URL("../icons/lucid_3-screen-share.svg?v=d4a8007edbc300d940d6ba09a689b598c272343b6af49bb4ede351f151a76cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
