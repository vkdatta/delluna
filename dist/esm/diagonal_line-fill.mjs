export const name="diagonal_line-fill";
export const id="dl_1d55bec440674b2e98df";
export const url=new URL("../icons/diagonal_line-fill.svg?v=f3d16b661b663246d5b60bbbaccba35b9f5fb14996f4855369e89177615fabd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
