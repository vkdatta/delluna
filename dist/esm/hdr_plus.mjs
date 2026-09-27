export const name="hdr_plus";
export const id="dl_6b128c940bb49855aa3c";
export const url=new URL("../icons/hdr_plus.svg?v=847052632e81905984566951be6b1b98688a3ca2fcbea6588f3839a6dbcad41e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
