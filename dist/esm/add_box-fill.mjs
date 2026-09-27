export const name="add_box-fill";
export const id="dl_04bea63b7016ec4b8dd4";
export const url=new URL("../icons/add_box-fill.svg?v=99f8391048eb7d9a44bb347022f5fc5bf06a1a93b60ed53beb6d82467b5143ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
