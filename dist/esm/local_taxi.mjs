export const name="local_taxi";
export const id="dl_d6a6a079891bc6aef5aa";
export const url=new URL("../icons/local_taxi.svg?v=4511188fec812a3ddc1ce6dccf2b0f7729e2ab860d7c89941455c552fbeb9595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
