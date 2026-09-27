export const name="user-round-plus";
export const id="dl_97c231521be44b3d80b9";
export const url=new URL("../icons/user-round-plus.svg?v=d351742373a900bc951f017413341700b9fe39372fbb0a00505c5e58dcfc59e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
