export const name="movie_edit_off-fill";
export const id="dl_71ed1dfcddea04b3c29e";
export const url=new URL("../icons/movie_edit_off-fill.svg?v=e6810671bdf938bd88426f16bfc155d4571d66a7a2996de7fc4114ed38698a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
