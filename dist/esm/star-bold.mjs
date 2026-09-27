export const name="star-bold";
export const id="dl_b9ef35ef093efe3f9a2c";
export const url=new URL("../icons/star-bold.svg?v=e456b195ce0f28235d63c0612b835fd120c747a8132d2be984863e2125674240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
