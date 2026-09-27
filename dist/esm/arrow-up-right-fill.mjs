export const name="arrow-up-right-fill";
export const id="dl_91b803b3f7b647dfaca3";
export const url=new URL("../icons/arrow-up-right-fill.svg?v=5624c15cffb25c4c33e86c3aa353cfe07182425335383bbd877aa103e0f74e79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
