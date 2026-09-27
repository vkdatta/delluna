export const name="lucid_3-shelving-unit";
export const id="dl_0d24cfea4919468c938c";
export const url=new URL("../icons/lucid_3-shelving-unit.svg?v=766c442fe49f213f485ad6f09b8ac502e2da9e9d0bbe394452c06932c4fae139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
