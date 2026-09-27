export const name="barn-light";
export const id="dl_8da140538cc94feeb085";
export const url=new URL("../icons/barn-light.svg?v=f569a73d7aa2ad99e9ce65a651c549868b9a8f59f4f32eb838133036cabbee89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
