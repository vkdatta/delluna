export const name="music-notes-simple";
export const id="dl_4f8c9680c39e41c48da1";
export const url=new URL("../icons/music-notes-simple.svg?v=d99afef26ffb9cc257481b1fe9049d67a392a26b3dc4fd999a3cd781faa9ee02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
