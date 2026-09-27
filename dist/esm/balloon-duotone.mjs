export const name="balloon-duotone";
export const id="dl_985d583ac8a84d6f9899";
export const url=new URL("../icons/balloon-duotone.svg?v=033f4bd6a4b6e85e8917604f5c0ab55da6a517c03ac8847e9ed5219d60024bf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
