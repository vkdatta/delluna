export const name="moped-fill";
export const id="dl_6c44738096e6483590c8";
export const url=new URL("../icons/moped-fill.svg?v=382f457dfb8c9a3169c53335464d5ce5ad2f178b805c9293cd6c31ed2acdb3f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
