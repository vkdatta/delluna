export const name="stack-minus";
export const id="dl_67432a66b43547875e2c";
export const url=new URL("../icons/stack-minus.svg?v=67042aeb968dc8abc31ed3d66d181d879d518b75abd2f34e43ec629d59c1aca4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
