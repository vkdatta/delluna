export const name="images-square-light";
export const id="dl_8eea943fb0eb4bee8ae9";
export const url=new URL("../icons/images-square-light.svg?v=1f497ac3a5efee7b22ece9b662030e858f7eaea0f6e4c585c5715df668e95050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
