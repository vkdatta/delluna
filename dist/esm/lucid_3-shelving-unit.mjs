export const name="lucid_3-shelving-unit";
export const id="dl_0d24cfea4919468c938c";
export const url=new URL("../icons/lucid_3-shelving-unit.svg?v=568c100ed4a4d8197d8a3168117329966a9e8946dfd230a112742beb1197770e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
