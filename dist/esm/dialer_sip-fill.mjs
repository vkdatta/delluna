export const name="dialer_sip-fill";
export const id="dl_2c21165623099bcb3f30";
export const url=new URL("../icons/dialer_sip-fill.svg?v=a950bbe84a1dbb9752f984304d7042e2ca5234bd9d0279b87aca90f7b8be38d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
