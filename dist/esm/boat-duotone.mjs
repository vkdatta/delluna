export const name="boat-duotone";
export const id="dl_b3dc094813b3487b8ec0";
export const url=new URL("../icons/boat-duotone.svg?v=910334476c1aa08f7a7b49076ae5663bae7af3b38ff3b47fbf49ab5c2429374c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
