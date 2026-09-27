export const name="user-circle-plus-duotone";
export const id="dl_4872840812988229e040";
export const url=new URL("../icons/user-circle-plus-duotone.svg?v=a3fd440f256ec49a51e2a243dbef5fd75be584f051ce23e23fe55e1deb545c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
