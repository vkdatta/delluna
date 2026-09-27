export const name="pin";
export const id="dl_d7a83b26c507dc620917";
export const url=new URL("../icons/pin.svg?v=f03d9d002ed0b3862c1875ad52be606159beb5ef8d40ad1f004d2401b213845f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
