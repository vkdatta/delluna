export const name="electric_rickshaw";
export const id="dl_3430386a28b94d34ae32";
export const url=new URL("../icons/electric_rickshaw.svg?v=793b73e41b3897233b8af87e7fbf48e5e0eee7b9427e3028e5db372e6efd08be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
