export const name="high-definition-duotone";
export const id="dl_ebee83097b4849e28d4b";
export const url=new URL("../icons/high-definition-duotone.svg?v=b8faa7ba0139935a89b708493d0747c89dd55184c3e14d3c9e30c4761d07a469",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
