export const name="lucid_2-dice-2";
export const id="dl_c2b9a726304447db8068";
export const url=new URL("../icons/lucid_2-dice-2.svg?v=a1ba2539bb30142a57ecf38cf0ed8d078e84d9a304b201c773bf78ecb0b4e3aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
