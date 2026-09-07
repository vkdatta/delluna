export const name="speedometer-light";
export const id="dl_3e4eda1ecfda43f986ca";
export const url=new URL("../icons/S/speedometer-light.svg?v=3bc9cb71f41f33c2a9d08c19f912a91d9be2e7f6c03e648e491b4a4534d306ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
