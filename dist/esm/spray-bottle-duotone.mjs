export const name="spray-bottle-duotone";
export const id="dl_0b8adceed129e7c17331";
export const url=new URL("../icons/spray-bottle-duotone.svg?v=3e834ef5c01d22ae631a39515cfb7e9c60993c60f73a43cbbcff89fc62e27dab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
