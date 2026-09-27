export const name="pencil";
export const id="dl_018d48e5d270c16f9063";
export const url=new URL("../icons/pencil.svg?v=937d236dafb93ab64afc07033909357f38fdbccc86f2aeb2d4c9f5d96ad0d34e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
