export const name="mouse-left-click-bold";
export const id="dl_a504ab6ce66340958d9a";
export const url=new URL("../icons/mouse-left-click-bold.svg?v=d59b79747bf429fdc1b5f46578c44e1dcd3d30b3080034c55f6f6530af29b54a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
