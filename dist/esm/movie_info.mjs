export const name="movie_info";
export const id="dl_158638d2878f4b8ea7ad";
export const url=new URL("../icons/movie_info.svg?v=c2ce3f40abd57d5fc66be3de0eca9eba485572b0a3be82df40a594bed4851180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
