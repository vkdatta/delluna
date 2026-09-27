export const name="thermometer-simple";
export const id="dl_935a209b70af0d13b54b";
export const url=new URL("../icons/thermometer-simple.svg?v=1e13287642c0a247b1042b349b3c9c482a27fae7085cc90146e539d86d9dc3b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
