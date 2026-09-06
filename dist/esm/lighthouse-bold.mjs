export const name="lighthouse-bold";
export const id="dl_7af28b749027488fa6f8";
export const url=new URL("../icons/lighthouse-bold.svg?v=8baaafec0ed8de21d0d62f3381cbd3b010c9e26048ff0032e25358ace0ea2c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
