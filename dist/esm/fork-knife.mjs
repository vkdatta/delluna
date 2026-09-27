export const name="fork-knife";
export const id="dl_529bcc0d07104fbfbb86";
export const url=new URL("../icons/fork-knife.svg?v=5b456baf4f9230671b7738c74a570debb161e746d2fb871230efb8edbf26deeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
