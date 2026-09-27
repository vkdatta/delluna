export const name="apk_document-fill";
export const id="dl_e9cc69d8a36659049d90";
export const url=new URL("../icons/apk_document-fill.svg?v=c4e0c2010b76a6035726fb38a3a519f5fab14c08019c6d005a55d346b7f76a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
