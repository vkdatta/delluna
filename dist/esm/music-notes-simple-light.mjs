export const name="music-notes-simple-light";
export const id="dl_2e05fb67c1c544b5be32";
export const url=new URL("../icons/music-notes-simple-light.svg?v=f14d8b99bdf10b58c9c48b7b9357a9e8aa1a4ab8c41add7e59beb9e88eaccfc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
