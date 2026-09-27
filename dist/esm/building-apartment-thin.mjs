export const name="building-apartment-thin";
export const id="dl_dc5b9ff61d194b8db335";
export const url=new URL("../icons/building-apartment-thin.svg?v=590d48b3820780e94e27b987928a66f18727625d54cd918becb4db794b33e2cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
