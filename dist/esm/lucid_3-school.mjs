export const name="lucid_3-school";
export const id="dl_fdba5ad9a4994fffab25";
export const url=new URL("../icons/lucid_3-school.svg?v=97f1a353b7e51f5cb41609acd51508b04be98aad4bad65aa5ca5a73379fab7bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
