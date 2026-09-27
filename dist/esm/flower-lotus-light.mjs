export const name="flower-lotus-light";
export const id="dl_aaae501873d84191bc57";
export const url=new URL("../icons/flower-lotus-light.svg?v=168428ba5b6ebc7a7c8ab05f4950f373f33955999e7be58c964efa1fc35ec541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
