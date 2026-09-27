export const name="bezier-curve";
export const id="dl_f9767301df374f659715";
export const url=new URL("../icons/bezier-curve.svg?v=7cc662fb271b1b83ff696e50cdb2ace1e65cda1bbc8cdee4328b65e6ca4903b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
