export const name="number-nine-fill";
export const id="dl_e86866f3b93e4b50b2ca";
export const url=new URL("../icons/number-nine-fill.svg?v=bf4fabcd54fe9b6b033c4a8338bafe5c8d3021fe2a5159232322f3f37cb00abf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
