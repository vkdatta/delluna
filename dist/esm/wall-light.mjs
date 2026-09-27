export const name="wall-light";
export const id="dl_16fabf752a98cf2f8568";
export const url=new URL("../icons/wall-light.svg?v=1add983181a0418540455fdefe804261de8d57e3c97da24991025cb9a0f07af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
