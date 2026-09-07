export const name="whatsapp-logo-duotone";
export const id="dl_a5dc91a6d9e645ab8650";
export const url=new URL("../icons/W/whatsapp-logo-duotone.svg?v=275fcd9c0666bb033e8d7991e0a4c53699bb0240e59082603d4d95c00ca54d0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
