export const name="autoplay";
export const id="dl_14dc482fb27ddf25e88d";
export const url=new URL("../icons/autoplay.svg?v=09e3fbcda308096482cce2519f3bc72a33e5ffacc1ddf7467cb2d845a2ddc83b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
