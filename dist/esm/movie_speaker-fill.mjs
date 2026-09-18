export const name="movie_speaker-fill";
export const id="dl_727de2a2f9d44f93b99e";
export const url=new URL("../icons/M/movie_speaker-fill.svg?v=8b1ee16cb0bfabef65ca383d921ea13e3c766317f327312c92e0c06ca1175ae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
