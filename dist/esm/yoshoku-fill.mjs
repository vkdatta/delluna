export const name="yoshoku-fill";
export const id="dl_00d0700dbc86e09af119";
export const url=new URL("../icons/yoshoku-fill.svg?v=886d66c4ac952b59a976c9289c71dc02b75131c59eba45641b5326a1c846503f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
