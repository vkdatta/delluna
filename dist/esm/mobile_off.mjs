export const name="mobile_off";
export const id="dl_143c545dd85edeaddfa9";
export const url=new URL("../icons/mobile_off.svg?v=9ad0f42300761ecb4dcb5cfb172e731d0374e78b34b0eb774638c9ec163d4d65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
