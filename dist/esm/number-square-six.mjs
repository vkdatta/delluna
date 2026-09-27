export const name="number-square-six";
export const id="dl_bc5d9bafc5a549abbdd7";
export const url=new URL("../icons/number-square-six.svg?v=082ccf4d25f07c73371cdc2b8895f8f1097a0c3f27718c4e1265d55442b7f963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
