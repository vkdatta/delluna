export const name="option-duotone";
export const id="dl_9ade4861df1a435ba911";
export const url=new URL("../icons/option-duotone.svg?v=95a755e9b3c11780f88d0ce6f89405df3e121415eef5949bf3b65b68a8bb7704",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
