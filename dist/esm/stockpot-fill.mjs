export const name="stockpot-fill";
export const id="dl_922c563628fd453e199e";
export const url=new URL("../icons/stockpot-fill.svg?v=8d1a01f451148e167f6d4916779ecb3645ea1628867cdd18bc5cc40cb69bfb3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
