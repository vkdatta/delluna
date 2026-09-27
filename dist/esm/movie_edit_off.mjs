export const name="movie_edit_off";
export const id="dl_28e02a3315bdb5b986e6";
export const url=new URL("../icons/movie_edit_off.svg?v=3c777ba933ecb3f72b327b06dcbe521c020dc595928773117e004ed71ca17f36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
