export const name="arrow-line-down-left-duotone";
export const id="dl_5be3c216771f48fdbcc6";
export const url=new URL("../icons/arrow-line-down-left-duotone.svg?v=afccc502b3850d14b205de12cf7704b376eda0ae8dbd2fa1314168ab309ace6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
