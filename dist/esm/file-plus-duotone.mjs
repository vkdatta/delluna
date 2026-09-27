export const name="file-plus-duotone";
export const id="dl_6bee82b70f394b978d67";
export const url=new URL("../icons/file-plus-duotone.svg?v=31ab0c0f9e1bd636801fe8f555e2617170c51dc683dfe47a5ccd7523839b04a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
