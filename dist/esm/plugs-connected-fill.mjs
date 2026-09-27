export const name="plugs-connected-fill";
export const id="dl_48a46a0ea5d541ddb56b";
export const url=new URL("../icons/plugs-connected-fill.svg?v=cae2948ef68077f96666726f050ab60802519d91711f43182f558d4f1c453477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
