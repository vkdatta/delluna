export const name="music-note-simple-duotone";
export const id="dl_7a01e2a1878741369b50";
export const url=new URL("../icons/music-note-simple-duotone.svg?v=dd7f75852ecf25c0b5c7daaa08d5cb3732b881804deb3c7eceb37956467ba8c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
