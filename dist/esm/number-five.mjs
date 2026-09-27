export const name="number-five";
export const id="dl_b04cb8e873e94a078326";
export const url=new URL("../icons/number-five.svg?v=ca1a6f9c03857c2ac8e0afd9aeb6c463f0fbff2711c0fbd1d3f0dfaf8002f5fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
