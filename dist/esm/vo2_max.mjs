export const name="vo2_max";
export const id="dl_3f51f0923ef4e0a8cd1a";
export const url=new URL("../icons/vo2_max.svg?v=cbdaaaf4a9b43e819826172ad7475357a768abcf189dc6a6769a086e850c3158",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
