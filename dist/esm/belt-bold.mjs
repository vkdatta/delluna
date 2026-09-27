export const name="belt-bold";
export const id="dl_482c81be12d1457aaafd";
export const url=new URL("../icons/belt-bold.svg?v=8fead3a69eb070cfda4241dece43d544257c357afbc1009a390642790afd2918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
