export const name="globe-hemisphere-west-duotone";
export const id="dl_6fe36e3dc5f941b89fd2";
export const url=new URL("../icons/globe-hemisphere-west-duotone.svg?v=380718be06126c47697f56c4ce5a50eb653f502e3b248b2a907a049a63268896",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
