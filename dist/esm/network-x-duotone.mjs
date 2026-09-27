export const name="network-x-duotone";
export const id="dl_7867ac067abd4842a7c5";
export const url=new URL("../icons/network-x-duotone.svg?v=1bd10f0b8b267c9c8fcdff002716b726d821a7beeed6b431a4b551f3eb169267",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
