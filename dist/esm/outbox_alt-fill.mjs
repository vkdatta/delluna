export const name="outbox_alt-fill";
export const id="dl_76cf0e9c6834192d4800";
export const url=new URL("../icons/outbox_alt-fill.svg?v=e9357d37a6a1ca49207d1cf21ad093033ac942c2716c4033a6ebee1816b8c351",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
