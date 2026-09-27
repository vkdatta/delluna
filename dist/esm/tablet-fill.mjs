export const name="tablet-fill";
export const id="dl_6a615209cbf0811f57dc";
export const url=new URL("../icons/tablet-fill.svg?v=fdb04fcf495f37d50a830064d42020fbf0a89177c9a92da4e7f34909b111b429",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
