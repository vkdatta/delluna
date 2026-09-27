export const name="eye_tracking";
export const id="dl_97eafd61fec7f3a6ae1f";
export const url=new URL("../icons/eye_tracking.svg?v=e4cc40eb02d3b49353af5f60b7ced269c40f0e0240143cbe9d3264d55387cf71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
