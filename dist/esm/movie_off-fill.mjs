export const name="movie_off-fill";
export const id="dl_e8ef1f18b48949edb894";
export const url=new URL("../icons/movie_off-fill.svg?v=9eaf100fe118ff08b09814dbc056c5aff127044fdf5bdcfff9e4cae479755ca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
