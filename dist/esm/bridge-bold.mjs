export const name="bridge-bold";
export const id="dl_e3ba91e728be45f2887b";
export const url=new URL("../icons/bridge-bold.svg?v=a2ae0ae90a2eb5cc5919cea07e015a15a3bc491e19c8c61253dbaf64b8b13d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
