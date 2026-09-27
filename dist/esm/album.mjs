export const name="album";
export const id="dl_10012962cb9b5a1ac352";
export const url=new URL("../icons/album.svg?v=1f74ce78e7aeae845a61408c2fb937d622d915261ef6d21ee38d882d4dc84add",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
