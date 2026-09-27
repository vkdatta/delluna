export const name="apk_document-fill";
export const id="dl_e78c7837bb3e6c2f62aa";
export const url=new URL("../icons/apk_document-fill.svg?v=885b3234c9d0656edb05fa6e98059257a15f2861b691c45f041233a80c79a2b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
