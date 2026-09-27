export const name="high-definition-duotone";
export const id="dl_ebee83097b4849e28d4b";
export const url=new URL("../icons/high-definition-duotone.svg?v=be51b7720a6f0a8754a67eae72688f19efcfcfd0b37180cd9e53694321279027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
