export const name="pencil-simple-thin";
export const id="dl_6e59d42433a94fb581ba";
export const url=new URL("../icons/pencil-simple-thin.svg?v=96207d189631ac6040707d25248109887048e95df25c499361c1e44e480e7129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
