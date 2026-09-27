export const name="moving_ministry";
export const id="dl_0894a0c2d13993d0c6f4";
export const url=new URL("../icons/moving_ministry.svg?v=d3313aa816d69d2c88966cf6ec540c07efcd6f8798289f0ba530e06c61248ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
