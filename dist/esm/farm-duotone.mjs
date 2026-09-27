export const name="farm-duotone";
export const id="dl_818673b0fc4b4e7fa2f4";
export const url=new URL("../icons/farm-duotone.svg?v=85a550f6030c462acdaf1282895b555a03090b469a07b7b2dc0f64df31d9db72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
