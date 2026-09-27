export const name="signature-duotone";
export const id="dl_51f72927c13fed1cd6a7";
export const url=new URL("../icons/signature-duotone.svg?v=f874f064fcb2fe8c9978be9e158efd699c38ab7b3fb29063168ced4267dc55e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
