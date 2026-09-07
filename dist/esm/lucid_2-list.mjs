export const name="lucid_2-list";
export const id="dl_f492596abb5b45e79e87";
export const url=new URL("../icons/lucid_2-list.svg?v=ef6dacb0bc5fb2f453434f7be4ebcd6d908c02e61b076e0d39eb781406d407a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
