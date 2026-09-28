export const name="smart_toy";
export const id="dl_6b9218d24a053b6431c9";
export const url=new URL("../icons/smart_toy.svg?v=aee709ccdb38e808b85b6abda45893a2aea76153cabc7bbef560dd76382df868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
