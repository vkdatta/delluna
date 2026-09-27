export const name="hourglass-high-duotone";
export const id="dl_780cac8bfc0248308c7c";
export const url=new URL("../icons/hourglass-high-duotone.svg?v=0d4b1ce138aa951e7377ab8930f0111c5fb7a6c5a7232da0ffd351446200594c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
