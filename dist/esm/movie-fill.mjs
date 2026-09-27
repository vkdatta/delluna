export const name="movie-fill";
export const id="dl_9fca6061b0fc8f6ed89c";
export const url=new URL("../icons/movie-fill.svg?v=9f625b15db7d7272cede364243bfbc296c488eb4f0e371469cee5d70169aa179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
