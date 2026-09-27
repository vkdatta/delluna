export const name="sports_mma";
export const id="dl_5701821be7e532ab7ff2";
export const url=new URL("../icons/sports_mma.svg?v=05508d889f2a61a0bb4cb9919b509c00977e40ec223b6f49dfcc82dfd5c668c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
