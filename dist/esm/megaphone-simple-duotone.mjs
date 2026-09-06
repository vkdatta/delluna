export const name="megaphone-simple-duotone";
export const id="dl_3ba9df91d34443429506";
export const url=new URL("../icons/megaphone-simple-duotone.svg?v=2f87703f71a29fa458976595fe938d8bc5161b8ee54cc95440a043f5c702cdf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
