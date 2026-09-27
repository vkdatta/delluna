export const name="caret-circle-double-up-duotone";
export const id="dl_d9e86fde3aa54efca2d4";
export const url=new URL("../icons/caret-circle-double-up-duotone.svg?v=9dba7e5cd336ecf220bbefe87e96fb0c8394a4e6f6b0690e6cec48fdcf9f3f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
