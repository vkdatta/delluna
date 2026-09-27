export const name="file-ts-duotone";
export const id="dl_3fcf6a1ed79f48cbbcc6";
export const url=new URL("../icons/file-ts-duotone.svg?v=740a83d63bdcde9bed9254049109fbd1d92de6e46c32b5b3608f3fa648ccb4d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
