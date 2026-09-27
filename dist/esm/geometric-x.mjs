export const name="geometric-x";
export const id="dl_37bc2b9dcb4fc4aa5f0d";
export const url=new URL("../icons/geometric-x.svg?v=a0ed0c1ff49c68ebc71a5936db0bdcd68245a00d1e7f78ead63ed74eef48ac5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
