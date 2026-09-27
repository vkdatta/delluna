export const name="bid_landscape";
export const id="dl_54e9822c20f6b1260228";
export const url=new URL("../icons/bid_landscape.svg?v=c3ac08d20de079ccff26d889e9b68b665aa01792c6f15a2ce1bce5608bf98fce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
