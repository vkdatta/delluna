export const name="bell-simple-bold";
export const id="dl_9c847f81d6374a87acb3";
export const url=new URL("../icons/bell-simple-bold.svg?v=df0f90ca66b9c02a3d0ab321e2b15e638d562aec94c3c000d9221882b1cb3fb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
