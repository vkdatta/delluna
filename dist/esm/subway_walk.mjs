export const name="subway_walk";
export const id="dl_5d24dbca1895e396c1fd";
export const url=new URL("../icons/subway_walk.svg?v=60d15aa3818b6f1e3d47714e5e20f4391db37d3609a656e48377f8992308636e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
