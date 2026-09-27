export const name="sneaker-bold";
export const id="dl_b5c1ae2d14c74fa90f40";
export const url=new URL("../icons/sneaker-bold.svg?v=1afb7e190ccc570b399748e3536810da2c9a98d3e15c5dae72f9dfbf854d1e49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
