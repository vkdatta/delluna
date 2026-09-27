export const name="ladder-bold";
export const id="dl_4bf473dc550a44048693";
export const url=new URL("../icons/ladder-bold.svg?v=1ffdcdaa91ea0b6e190218c79bc244771074d1528da686510525758e069f0cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
