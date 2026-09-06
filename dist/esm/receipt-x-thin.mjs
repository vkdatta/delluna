export const name="receipt-x-thin";
export const id="dl_0393d60f7bc740dfb843";
export const url=new URL("../icons/receipt-x-thin.svg?v=fc8d9119e41614560fc8c2c4ef669c4a4d96506854924e68168c9a13f2b65f87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
