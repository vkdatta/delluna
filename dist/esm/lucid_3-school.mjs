export const name="lucid_3-school";
export const id="dl_fdba5ad9a4994fffab25";
export const url=new URL("../icons/lucid_3-school.svg?v=4a53c6b503026fcebe182dfcab24ddd6247d8da840976936f534cd4b374ab857",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
