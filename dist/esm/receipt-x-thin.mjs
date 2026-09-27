export const name="receipt-x-thin";
export const id="dl_0393d60f7bc740dfb843";
export const url=new URL("../icons/receipt-x-thin.svg?v=a105b7b030390f8a3e5cdfc1bbea9db293e89ca326a71cac0d13b4419ae8f436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
