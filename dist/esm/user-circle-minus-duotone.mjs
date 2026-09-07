export const name="user-circle-minus-duotone";
export const id="dl_bb5def7c593b40d7a562";
export const url=new URL("../icons/U/user-circle-minus-duotone.svg?v=45d5ee008a692a87d61e7897e27ac7a9b07fa69b2f3a195c283003c7f7e3c731",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
