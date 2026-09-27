export const name="movie_info-fill";
export const id="dl_1ba8cd7e70c47e2017d9";
export const url=new URL("../icons/movie_info-fill.svg?v=ad78afdc5b4b6f302ecf2ebb1626b874bb26add97dac34bbd9dcc2c0108e9b66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
