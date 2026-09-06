export const name="plugs-connected-fill";
export const id="dl_48a46a0ea5d541ddb56b";
export const url=new URL("../icons/plugs-connected-fill.svg?v=0310a1554853763657b1d44f771c3a0f4322a2ff3ea1f0bf7cfefbc89dfc8c60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
