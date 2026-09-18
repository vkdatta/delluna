export const name="movie";
export const id="dl_7df880b63cef4a9da8c3";
export const url=new URL("../icons/M/movie.svg?v=05a7ccfa774239df57a01fe26c76c389ee5f448a61781cd669af354df982b858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
