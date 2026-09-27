export const name="watch_screentime";
export const id="dl_57ab39e27de3dd54c62f";
export const url=new URL("../icons/watch_screentime.svg?v=8c5814d26437ee15bcb15e974b15c3378e94d101954b618a85162d84a31f15c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
