export const name="belt";
export const id="dl_0f7fd75af0c140bd87ca";
export const url=new URL("../icons/belt.svg?v=256134a51cc6f1b547a9c751dcce6ab81f37b3319f192fef14d213ac428bcf33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
