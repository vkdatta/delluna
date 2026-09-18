export const name="night_shelter-fill";
export const id="dl_0ee2817ba5ca40e7b012";
export const url=new URL("../icons/night_shelter-fill.svg?v=0349570e6a563e0a19a2304c8c66e008ce523bc3d04149299503b7b9356a476f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
