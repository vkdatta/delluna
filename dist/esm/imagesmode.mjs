export const name="imagesmode";
export const id="dl_209fa6d428c3259274f9";
export const url=new URL("../icons/imagesmode.svg?v=e2886ada463da6a015d9f1c0f41c0751223f1ab5ea17a8824289aa253c2bd173",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
