export const name="user-minus-light";
export const id="dl_72d2abac09623262701f";
export const url=new URL("../icons/user-minus-light.svg?v=9f826c4dd514d292ecf38d3415754f00d236b27c1a1afd01ed17b816e8ca1db3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
