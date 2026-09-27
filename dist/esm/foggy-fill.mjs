export const name="foggy-fill";
export const id="dl_e7c11900ed917a7e4dec";
export const url=new URL("../icons/foggy-fill.svg?v=1c6ce6d4f15b82dbc48aa036cc68344f2044a29436f5bc50ad635285f0bbb836",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
