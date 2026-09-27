export const name="receipt_long_off";
export const id="dl_7f3e8bf3a7b8f657c764";
export const url=new URL("../icons/receipt_long_off.svg?v=669396ef33987cf75900b2cc976bf9796b215347d7168eac544e79b51b9d4db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
