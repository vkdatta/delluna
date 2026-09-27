export const name="bridge-bold";
export const id="dl_e3ba91e728be45f2887b";
export const url=new URL("../icons/bridge-bold.svg?v=f822cc0bcc8f28badbff1def1277b523106774bfbb3f8f856d5cbbab1c3ba5b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
