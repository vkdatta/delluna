export const name="images-square-bold";
export const id="dl_092ba507d79241c49234";
export const url=new URL("../icons/images-square-bold.svg?v=e5e2d8fc6cb27d0de913eacfcdc2f563b35236338236ebf258e7d487b2956f9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
