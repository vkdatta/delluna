export const name="sports_mma";
export const id="dl_a8e1d59fa25e4b2fafed";
export const url=new URL("../icons/S/sports_mma.svg?v=a5e7d4f7c3d0fd2d99cc5e6f863382f935098b4a209bcb4bb45dafbfa6dae928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
