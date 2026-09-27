export const name="airplane-taxiing-light";
export const id="dl_bff0c2f502fd49ab8b76";
export const url=new URL("../icons/airplane-taxiing-light.svg?v=0d66c231b354ec0bf73a4383499f48b3da79772784e27fa3f9a1f78109fce3fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
