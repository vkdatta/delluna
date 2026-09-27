export const name="business_messages";
export const id="dl_0cbd5f3b3e57746d78a2";
export const url=new URL("../icons/business_messages.svg?v=c17c9a3d7fec2ee27e4f22974df3aad4e0e2c9e48eb6ffe98bc11e7996146ae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
