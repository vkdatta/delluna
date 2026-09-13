export const name="30fps";
export const id="dl_489fe7c751894e47bd97";
export const url=new URL("../icons/3/30fps.svg?v=edc3d3c2f697c2ebdd68ffb657b3db5d0eb6445e57f2603eb8ae76a6d7a8e289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
