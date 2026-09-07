export const name="phone-slash-duotone";
export const id="dl_bd622b079db44ac99d70";
export const url=new URL("../icons/phone-slash-duotone.svg?v=80505b9eb14909cd971e569d40c12fa8fc76538d32cdac418fa12e3e8ef1257f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
