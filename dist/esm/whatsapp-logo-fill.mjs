export const name="whatsapp-logo-fill";
export const id="dl_6bd9e856cd91417eba0b";
export const url=new URL("../icons/whatsapp-logo-fill.svg?v=c4ea8e4a2bdab60b98c3930f0998ba9ac8eda7bd8b67aa6711daf73e1c311d50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
