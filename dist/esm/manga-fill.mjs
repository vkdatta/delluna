export const name="manga-fill";
export const id="dl_ca38eb6d856bca770049";
export const url=new URL("../icons/manga-fill.svg?v=e8070c4b26ebaef9e94f2fcebeb41724d268d1c2463038c72b19da15f98af70e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
