export const name="stack-simple";
export const id="dl_2d1f7bd47f7f49f84b21";
export const url=new URL("../icons/stack-simple.svg?v=155b3ed0dd4cf74090ed9b3377318b9533179760ef8659ce708d87a252ca8563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
