export const name="storage-fill";
export const id="dl_4aae30b17bdbdb348557";
export const url=new URL("../icons/storage-fill.svg?v=31b72fc532cb0b010cfa2d6d4fe48a08eb837278476076daaf8ee2e962797aa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
