export const name="network-x-duotone";
export const id="dl_7867ac067abd4842a7c5";
export const url=new URL("../icons/network-x-duotone.svg?v=3ab503f49108d43268e59e2210b17f87b74a743f6d1745a5c69fbaaa736a70e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
