export const name="note-thin";
export const id="dl_aff2051b326845d989e2";
export const url=new URL("../icons/note-thin.svg?v=c780d87939899f3c56ed8d185a27ead67163a9eaf17a30a98d0f7fc348dbc8e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
