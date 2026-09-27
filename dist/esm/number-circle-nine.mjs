export const name="number-circle-nine";
export const id="dl_f37cdc4fe69f441194fc";
export const url=new URL("../icons/number-circle-nine.svg?v=9f672fc68f12fe7872ab47c5227c99ef535a2a2a286d1053ac7fd5644d5d9d7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
