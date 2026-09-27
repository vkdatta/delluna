export const name="storm";
export const id="dl_b92174b1f404bf3b2170";
export const url=new URL("../icons/storm.svg?v=92d42c399a3a89b5f7e88e502ae71d53985321a6032ef5363f3191afba32b21d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
