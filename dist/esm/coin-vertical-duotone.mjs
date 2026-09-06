export const name="coin-vertical-duotone";
export const id="dl_cf9f18f330a34313a22c";
export const url=new URL("../icons/coin-vertical-duotone.svg?v=09879dd3946e3b967be2d02ede906ff14d003004bc1660b6a2f230175aef8466",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
