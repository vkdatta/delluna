export const name="repeat-light";
export const id="dl_13d4d64dac034f478a5d";
export const url=new URL("../icons/repeat-light.svg?v=fabac688ca43b79a1b0c39f3320bbae11819037a6d1c2d9d3f192cdaa9d270a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
