export const name="heat";
export const id="dl_ab4c0d23dc9660a0bbc0";
export const url=new URL("../icons/heat.svg?v=4ad86e42a203d9977ddccf11572b7791a0fc0de38ea87f07bc87395dc8066745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
