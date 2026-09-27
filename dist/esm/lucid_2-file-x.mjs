export const name="lucid_2-file-x";
export const id="dl_1e0d565c583a4ad0a659";
export const url=new URL("../icons/lucid_2-file-x.svg?v=2f24ca91addd2e8178153b4c9952e714b76ddda211ac4141026328ce304076d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
