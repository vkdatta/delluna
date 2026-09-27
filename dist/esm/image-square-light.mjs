export const name="image-square-light";
export const id="dl_1250f4bb1e9b44cfbd82";
export const url=new URL("../icons/image-square-light.svg?v=08ebe73c76ecce20f4dd90de060b1a3af059aabea7a648d361f69e0ac3d73ebd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
