export const name="forest";
export const id="dl_24c51d5fc9ff4e129a6b";
export const url=new URL("../icons/forest.svg?v=a374f43781ad168625d065d320cf3c9c321a93b25d85c67059d2d63bf3fa5f7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
