export const name="upi_pay";
export const id="dl_d5e4d1153e07852afc57";
export const url=new URL("../icons/upi_pay.svg?v=b8410eba54dcfe81b6e752ddf8823847f8d8a03797e232ccbd59079d8ae71c14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
