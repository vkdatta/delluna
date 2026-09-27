export const name="shades_closed";
export const id="dl_9d321bef0f6a36bf204e";
export const url=new URL("../icons/shades_closed.svg?v=0920a5485943b1e15b2dbe0be4aa1ac37013363ad18b27a60bff2932a46a0200",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
