export const name="file-png-bold";
export const id="dl_c5f732e103dd4185ba7a";
export const url=new URL("../icons/file-png-bold.svg?v=67286ac59b1247111514a1bbe4bea6e07e83d57f2699bab8adadd0520313f4f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
