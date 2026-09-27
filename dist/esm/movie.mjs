export const name="movie";
export const id="dl_abb58c01e1325505e2f0";
export const url=new URL("../icons/movie.svg?v=4758625f3efd1fb5c4c54d80e35d3cb4e413ff20c043ae78b585f62ef618b72d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
