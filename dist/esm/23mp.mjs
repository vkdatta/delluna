export const name="23mp";
export const id="dl_408e351d29dbfeb73e64";
export const url=new URL("../icons/23mp.svg?v=a82c44c18d76d672b2233486300d672254a552b3c46ef44a23912d68382716e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
