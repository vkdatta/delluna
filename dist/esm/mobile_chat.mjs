export const name="mobile_chat";
export const id="dl_ffc4b6b9410b5c506727";
export const url=new URL("../icons/mobile_chat.svg?v=69008a1ef07224e4c1e3c4ef22b51e158a6f8c48b430e481ee21259b00f7aba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
