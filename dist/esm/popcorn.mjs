export const name="popcorn";
export const id="dl_e8b767419b16409091b9";
export const url=new URL("../icons/popcorn.svg?v=890272365d98c25b841d68754e4eee0af9949123872823267bb55b861adfa91e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
