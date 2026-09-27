export const name="fireplace";
export const id="dl_4b61443c9c775107ff6c";
export const url=new URL("../icons/fireplace.svg?v=09970cccf1796b4736f496b7a354a293613da0fb10cb3d7a0801b063710e2d32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
