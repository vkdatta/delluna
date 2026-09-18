export const name="laptop_mac";
export const id="dl_547164cb6de843a19c8b";
export const url=new URL("../icons/L/laptop_mac.svg?v=8c07e3d51db8f35ced2be2b72f2cd4f09133c6fd7d0e4b5a27939bf25674a6d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
