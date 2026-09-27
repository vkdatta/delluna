export const name="mosque-duotone";
export const id="dl_eb796216b3b14c7d9e8b";
export const url=new URL("../icons/mosque-duotone.svg?v=a0615b738189d3948a7863c9fdb0cda0c426fbc3cc5c93f8e61e8fe4faa72e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
