export const name="clover";
export const id="dl_88458c280c144bd281fa";
export const url=new URL("../icons/clover.svg?v=f02efe6f0d0333520443dd92655a280fbafb43166781800efc18daf5f5316112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
