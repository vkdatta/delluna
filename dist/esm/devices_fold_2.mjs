export const name="devices_fold_2";
export const id="dl_7f4435491b8a4908c3f0";
export const url=new URL("../icons/devices_fold_2.svg?v=b779f27df20c67e9730843d13332eafa78b76be3dfa36c13fbdf7bce8906c9f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
