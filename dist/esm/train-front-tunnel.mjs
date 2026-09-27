export const name="train-front-tunnel";
export const id="dl_a82ade1d1cba49edaa76";
export const url=new URL("../icons/train-front-tunnel.svg?v=7d5252d31aa9c6719c32aeb41f250584b7985928a7d57f6d6ea39257e0ab5405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
