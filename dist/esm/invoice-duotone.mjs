export const name="invoice-duotone";
export const id="dl_c9486bfe9a1649278472";
export const url=new URL("../icons/invoice-duotone.svg?v=1501b9b400eaa2a73c2da10894815a70bf477bc2ec58967da22447e9c3190046",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
