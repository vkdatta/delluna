export const name="text-t-bold";
export const id="dl_895ee591b6534c23bb03";
export const url=new URL("../icons/T/text-t-bold.svg?v=ca48a422f871e674081c74d6b29fdfd04b7aa86604e0acdab64387146bc7124b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
