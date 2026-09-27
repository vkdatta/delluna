export const name="close_circle";
export const id="dl_e42c16d6f4c46317603a";
export const url=new URL("../icons/close_circle.svg?v=4d1ffb8b104645f4ce5eb58496c4c555b3b32c7345c3a58b2a9214e20b01f3b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
