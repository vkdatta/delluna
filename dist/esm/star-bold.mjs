export const name="star-bold";
export const id="dl_3ed22a31ed0548a6a255";
export const url=new URL("../icons/S/star-bold.svg?v=e456b195ce0f28235d63c0612b835fd120c747a8132d2be984863e2125674240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
