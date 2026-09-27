export const name="whatsapp-logo-bold";
export const id="dl_cb854939f8841b3e5d05";
export const url=new URL("../icons/whatsapp-logo-bold.svg?v=9d0a7020ad8f35a0c8bc492b057a1064cf99e3776c46c5bda5327aa8fe3117f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
