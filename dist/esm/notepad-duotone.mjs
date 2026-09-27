export const name="notepad-duotone";
export const id="dl_42282d6a4cf84a88a54c";
export const url=new URL("../icons/notepad-duotone.svg?v=8d5c41df1effe8567c0b12ee5f6b7dee91fcc4f124eddde4710b8f0fe574347d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
