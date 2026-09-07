export const name="pencil";
export const id="dl_e6327289cb864926a87c";
export const url=new URL("../icons/pencil.svg?v=59c456fd1164519962c4828df6bc803e9659800c1ca478bac2ad477b220a79ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
