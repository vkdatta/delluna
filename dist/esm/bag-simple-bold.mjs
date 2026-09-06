export const name="bag-simple-bold";
export const id="dl_b024864c2204465ab20f";
export const url=new URL("../icons/bag-simple-bold.svg?v=a2dd1a1d3d3888a6e6534047f9af9589a650f9a0bf73bbf20162a10a1ec17890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
