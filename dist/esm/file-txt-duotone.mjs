export const name="file-txt-duotone";
export const id="dl_da13f64d0e9f4eb09bc6";
export const url=new URL("../icons/file-txt-duotone.svg?v=005d38f9b3197b6f25875b88df09da3782c19a9e66396d1b4e40d5744cd48517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
