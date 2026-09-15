export const name="extension";
export const id="dl_fb7108015b064bc28dc1";
export const url=new URL("../icons/E/extension.svg?v=9147ac10e6a05b64b9d5214ff062951097695340e938db76d932462db227e626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
