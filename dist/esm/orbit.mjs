export const name="orbit";
export const id="dl_42c5eb1c05ab3ab506da";
export const url=new URL("../icons/orbit.svg?v=35c64e5ec11051363b8086cea00c046b5740b80ecba60bdc0b57bb54cf3d20cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
