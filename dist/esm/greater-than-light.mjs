export const name="greater-than-light";
export const id="dl_9dec16d5b20a47dd99ed";
export const url=new URL("../icons/greater-than-light.svg?v=bfe47efc6437237cfcbd11bca2eaa821e33b895e8434706da69c6a68b8f6f2e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
