export const name="whatsapp-logo-duotone";
export const id="dl_f3fabe7a758ef9ca025a";
export const url=new URL("../icons/whatsapp-logo-duotone.svg?v=275fcd9c0666bb033e8d7991e0a4c53699bb0240e59082603d4d95c00ca54d0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
