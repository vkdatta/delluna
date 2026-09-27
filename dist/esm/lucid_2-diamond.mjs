export const name="lucid_2-diamond";
export const id="dl_cafbbf7576f845f6b073";
export const url=new URL("../icons/lucid_2-diamond.svg?v=eb7493f3dc3984550a3b5daeef71ce59d3d0dd55273f7239340b3f88cfbeeea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
