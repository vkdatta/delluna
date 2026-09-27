export const name="radical-duotone";
export const id="dl_10b28ddfcda7430e8924";
export const url=new URL("../icons/radical-duotone.svg?v=88c603f3c98d1ce42acfe96ba92d7646f2ffc767c8240a7ec284ec5dc7771561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
