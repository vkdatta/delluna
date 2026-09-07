export const name="arrow-down-right";
export const id="dl_4e6a9919f5c44a079168";
export const url=new URL("../icons/arrow-down-right.svg?v=2d974b8c8a4e546b160f11954bfdd5a103ce7f5fab3619c61f48e923efe197e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
