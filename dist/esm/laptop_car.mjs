export const name="laptop_car";
export const id="dl_b36005e76f5a4f3d87b4";
export const url=new URL("../icons/laptop_car.svg?v=0a5414c8e337e0e1f5d5280ef7706a3c5674566dbf73c148d8b606a118fa3a97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
