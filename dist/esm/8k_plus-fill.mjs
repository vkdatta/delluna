export const name="8k_plus-fill";
export const id="dl_a1fcc1a91b624f17b4f8";
export const url=new URL("../icons/8/8k_plus-fill.svg?v=b17678eff0049c8a7b2069545b383e2abc0f2c010e69fe8fce79b34e35f525de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
