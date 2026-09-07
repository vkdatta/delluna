export const name="whatsapp-logo-bold";
export const id="dl_f6a310b49543424e921a";
export const url=new URL("../icons/W/whatsapp-logo-bold.svg?v=3c01f4deb591dc39dd4b828513e25ce4ab1059f52f0a0482bf138aaf41d2a2fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
