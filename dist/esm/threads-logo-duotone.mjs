export const name="threads-logo-duotone";
export const id="dl_43244cf1aabb67924d66";
export const url=new URL("../icons/threads-logo-duotone.svg?v=555339b4c66c734718d2e42a49c2edd12429968313e16ac7669ac86c104b3c5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
