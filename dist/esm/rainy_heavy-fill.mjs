export const name="rainy_heavy-fill";
export const id="dl_24b4ac1b3dd2498283f2";
export const url=new URL("../icons/R/rainy_heavy-fill.svg?v=734ef7acf95456304416103c6bebfa5f0a2afbeca710812c76b79c292a2ba1ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
