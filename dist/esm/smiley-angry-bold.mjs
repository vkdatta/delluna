export const name="smiley-angry-bold";
export const id="dl_cee70406f98d43624189";
export const url=new URL("../icons/smiley-angry-bold.svg?v=0fc5bc1b8f40704835ee872238399c655043a1a044a2c1e81e31aa40fdef15bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
