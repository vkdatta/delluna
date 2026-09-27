export const name="finance_chip";
export const id="dl_32d4ce7df9de67946f10";
export const url=new URL("../icons/finance_chip.svg?v=b6583e704c6116b7aac7658074c237eb4b61db72471a8c22f112086920afcdb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
