export const name="movie-fill";
export const id="dl_d0408eb222424ae08b96";
export const url=new URL("../icons/M/movie-fill.svg?v=f170279848262e0786045a6eb906449328b0608f8bea10d51fd846361e966592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
