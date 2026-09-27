export const name="ifl-fill";
export const id="dl_46709704a7b40a807288";
export const url=new URL("../icons/ifl-fill.svg?v=524af4a792ebb3a0177341adf61c5f7400800f388f6d293f1441d3e92161cb16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
