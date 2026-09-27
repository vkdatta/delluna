export const name="football-helmet-bold";
export const id="dl_c48c02a370d2413890f1";
export const url=new URL("../icons/football-helmet-bold.svg?v=bda977951d481dc4d0f8adc4e41fe29e4ff7db7d57780cf9a125183084d9acb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
