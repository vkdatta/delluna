export const name="dialer_sip";
export const id="dl_ae1cf130aace46eebf0f";
export const url=new URL("../icons/D/dialer_sip.svg?v=c8ae86181cb814addcb0fdd0b89b7f99bff7ec1c20dd4b7bda2c4aaa6364dbfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
