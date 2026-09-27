export const name="selection-all-fill";
export const id="dl_9576cf8937c206ec17b0";
export const url=new URL("../icons/selection-all-fill.svg?v=911972b42ca36d6be95227eae6c0491532bcc3f19a893a0c84a5a3ba01bf4956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
