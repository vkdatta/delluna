export const name="pin-fill";
export const id="dl_bc93d3d0580703be2342";
export const url=new URL("../icons/pin-fill.svg?v=09f45e13a283d351f60b18920489e76ea11c1ee83ac7a25474498736e1a6ddb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
