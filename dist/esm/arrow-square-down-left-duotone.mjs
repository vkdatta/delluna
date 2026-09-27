export const name="arrow-square-down-left-duotone";
export const id="dl_c93f71de848c4c9aa11b";
export const url=new URL("../icons/arrow-square-down-left-duotone.svg?v=b0366cf1d0fab950bc351571aad7fe699ae71072b10a441e4c92f62187bf32ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
