export const name="toolbox";
export const id="dl_22d3c9c948394f25988b";
export const url=new URL("../icons/toolbox.svg?v=3383bd3552f0427ba5412b511df4a742dde02bf59db2c9e266acbe5d5a1d3643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
