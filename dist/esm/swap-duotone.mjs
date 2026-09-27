export const name="swap-duotone";
export const id="dl_fb00e834401c6bac6c75";
export const url=new URL("../icons/swap-duotone.svg?v=2214dd3b8638d8819819587d2a0a7ea83ebe3c7c5bf6ffcfe74350c414ad83fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
