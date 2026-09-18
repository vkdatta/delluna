export const name="more_horiz-fill";
export const id="dl_b914e11f9e1d450fb248";
export const url=new URL("../icons/more_horiz-fill.svg?v=a49efa0727defa3c065f8992f3dfa9e8c65dadebe9c6cc39a02da63ba6ba4d23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
