export const name="image-duotone";
export const id="dl_b0f738391f774425a9ec";
export const url=new URL("../icons/image-duotone.svg?v=d62b59d3011f11ff29aa7944c28fcf56659e3bf6038e3d6e50844f434fc7945d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
