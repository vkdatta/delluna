export const name="subset-of-bold";
export const id="dl_3bcd6b905685606d549f";
export const url=new URL("../icons/subset-of-bold.svg?v=6743905f8cc09176807d10a29ce3d6cd96d217c915fffd5ef2a55c9cf1f29961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
