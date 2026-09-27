export const name="flower-lotus-light";
export const id="dl_aaae501873d84191bc57";
export const url=new URL("../icons/flower-lotus-light.svg?v=169e5a6bc70865ce153b7544ab4f2aad7969b068c78d234e5ba1709f4100f739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
