export const name="test-tube-diagonal";
export const id="dl_8321ee3045764f8096f8";
export const url=new URL("../icons/test-tube-diagonal.svg?v=1495cdb6805af69daab40e6cde4a6356367f0cfd392d52c0f83d3e11a1b115b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
