export const name="paragraph-duotone";
export const id="dl_953b90b0152b485f84f2";
export const url=new URL("../icons/paragraph-duotone.svg?v=86533dcd53f4816bb27be913ba45f3b272c54112c498266f56687a117e9907f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
