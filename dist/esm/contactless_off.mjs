export const name="contactless_off";
export const id="dl_e8f947eedb404981b2af";
export const url=new URL("../icons/C/contactless_off.svg?v=9b352a6db9d4ee722a4799e1564c39c22b9e43102e3add47e71dbc00ed0d6add",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
