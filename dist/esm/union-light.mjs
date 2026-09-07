export const name="union-light";
export const id="dl_0d927127a78e4eb4aaee";
export const url=new URL("../icons/U/union-light.svg?v=89165ecbd3aca0a1bac7140a2d407a2be9d0b06d07c21b9f56fe971804f11f04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
