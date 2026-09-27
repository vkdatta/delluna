export const name="table_eye";
export const id="dl_c0293f6bf377f16b9de7";
export const url=new URL("../icons/table_eye.svg?v=ad3c47264c4181e03d5c9e21875f1ec8b04c99fbe14e13d79022e3f4be1f5c8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
