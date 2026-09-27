export const name="thumbs_up_down";
export const id="dl_9febbf5ceca6e1e4145a";
export const url=new URL("../icons/thumbs_up_down.svg?v=eae0737906a8706c687e81b5bdf82831e45185958a0f03e107eace2605c2ca17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
