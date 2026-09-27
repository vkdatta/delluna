export const name="phone-call-duotone";
export const id="dl_a15d4ff84b6d48969c52";
export const url=new URL("../icons/phone-call-duotone.svg?v=d9bd401c3d42f18b985759c26c5a10482c1b04faba3322f0dd830a25f6cf3984",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
