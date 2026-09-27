export const name="globe_clock-fill";
export const id="dl_a1ad677b7b391d4de10f";
export const url=new URL("../icons/globe_clock-fill.svg?v=cca3d67d3eabd949196622b39cd5cb8967c7e0e614f50327a8050e7fb187592c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
