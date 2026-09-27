export const name="ink_pen";
export const id="dl_25281f99e159125bf676";
export const url=new URL("../icons/ink_pen.svg?v=8bd91721dbb86056ed3d83b4a91bdde369b36262bd687b020e6aef1f85377108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
