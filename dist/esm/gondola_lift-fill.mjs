export const name="gondola_lift-fill";
export const id="dl_ce6a5d3ca7c848d4be68";
export const url=new URL("../icons/G/gondola_lift-fill.svg?v=182b9c46eb5af676daa3dbd54d045e7a85ec0b36eb4a9e8471735ce1a3f8d9cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
