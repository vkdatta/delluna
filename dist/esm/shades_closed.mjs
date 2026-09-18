export const name="shades_closed";
export const id="dl_8966423bd1d7408c8d3b";
export const url=new URL("../icons/shades_closed.svg?v=b7f90199cd2f38733fd388428a271c7e6deb43083950de70339a7e29d3786af2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
