export const name="hand-withdraw-duotone";
export const id="dl_ed465fdf257b4fc4b921";
export const url=new URL("../icons/hand-withdraw-duotone.svg?v=2fae28741cf9198fb789f68329d3b180076b53ee1a0978716bc849ac71b3f20c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
