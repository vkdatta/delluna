export const name="tactic-fill";
export const id="dl_7f54b0a4e7d5248b7324";
export const url=new URL("../icons/tactic-fill.svg?v=5480fe2c802a40533c13d1739c5a5896f5668d09c4cca35ba796533c6e26a436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
