export const name="tangent";
export const id="dl_91f588d0479c42f289b7";
export const url=new URL("../icons/tangent.svg?v=a0b72518df64497b78f96ffcbd44ccccbe334c80ebddebda700d15fa49f63a18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
