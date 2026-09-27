export const name="music-note-simple-duotone";
export const id="dl_7a01e2a1878741369b50";
export const url=new URL("../icons/music-note-simple-duotone.svg?v=27e171d11fe4e7ab3ba194628be366e1bd54b0dc1c8838267cde4ff9f2b90c2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
