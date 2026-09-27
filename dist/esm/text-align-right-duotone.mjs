export const name="text-align-right-duotone";
export const id="dl_1e37cd6b0d3f6bd22788";
export const url=new URL("../icons/text-align-right-duotone.svg?v=51823296139bb5d4fddd8642780d906bc7b2b1bf18c6801e9dcf3d09a417f8dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
