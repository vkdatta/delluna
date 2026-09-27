export const name="circle-plus";
export const id="dl_6c3ad686a3c4bae886e5";
export const url=new URL("../icons/circle-plus.svg?v=9385e97b6e867c08868bc8b7c7cb381c2e3bad13a642341b516955c76f5c13ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
