export const name="planet-bold";
export const id="dl_ec78b4af416c4a01bd43";
export const url=new URL("../icons/planet-bold.svg?v=70b95f37dda7889df7f096ddd8479f90af551f790fb447b2755ad77e982032ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
