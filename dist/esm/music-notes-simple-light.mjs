export const name="music-notes-simple-light";
export const id="dl_2e05fb67c1c544b5be32";
export const url=new URL("../icons/music-notes-simple-light.svg?v=ecc39232901bd2f2452aa691089f054dffa65e5a2a56d1c01963680da9e6084c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
