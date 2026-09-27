export const name="wine-off";
export const id="dl_b9195bad052b40d081c6";
export const url=new URL("../icons/wine-off.svg?v=30dc448ab3f0741678f3ab93d35a6e3f566ddcb5e48c2deebefca5168a895004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
