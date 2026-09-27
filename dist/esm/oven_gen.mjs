export const name="oven_gen";
export const id="dl_9a1ecc63d5022464912a";
export const url=new URL("../icons/oven_gen.svg?v=cac47e79e7834a573ab042574477bc81c4f6a2092b70a34ab68d7557641d67b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
