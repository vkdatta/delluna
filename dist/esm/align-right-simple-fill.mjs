export const name="align-right-simple-fill";
export const id="dl_1e97ddd44d4e4f74a42b";
export const url=new URL("../icons/align-right-simple-fill.svg?v=9e7f404f64a06272f8c3b47d48c07667ed3811e49ce59a20da95b91a2825d111",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
